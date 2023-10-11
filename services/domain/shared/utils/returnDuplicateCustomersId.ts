import * as CustomersRepository from '@services/domain/repositories/customersRepository';
import * as ReviewsRepository from '@services/domain/repositories/reviewsRepository';

const checkDuplicateCustomersId = async () => {
  const customers = await CustomersRepository.selectCustomers();
  const reviews = await ReviewsRepository.selectReviews();

  const generalCustomerInfo = reviews.value.reduce((accumulator:any, current:any) => {
    const customer = customers.value.find((item:any) => item.id === current.client_id);
    if (customer) {
      accumulator.push({ ...current, ...customer });
    }
    return accumulator;
  }, []);

  const duplicateCustomers = [] as any;
  await generalCustomerInfo.reduce((accumulator:any, current:any) => {
    if (!accumulator.find((item:any) => item.first_name === current.first_name
      && item.last_name === current.last_name
      && item.year === current.year
      && item.result === current.result)) {
      accumulator.push(current);
    } else {
      duplicateCustomers.push(current);
    }
    return accumulator;
  }, []);

  const duplicateCustomersId = await generalCustomerInfo.reduce((accumulator:any, current:any) => {
    if (duplicateCustomers.find((item:any) => item.first_name === current.first_name
      && item.last_name === current.last_name)) {
      accumulator.push(current);
    }
    return accumulator;
  }, [])
    .map((el:any) => el.id)
    .filter((value:any, index: any, arr: any) => arr.indexOf(value) === index);

  return duplicateCustomersId;
};

checkDuplicateCustomersId();
