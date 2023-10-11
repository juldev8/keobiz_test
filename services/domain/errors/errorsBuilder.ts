export const buildEntityError = (errors: any) => {
  const errorArray = errors.details.map(
    (error: any) => (
      {
        title: `${error.context?.label} ${error.type}`,
      }
    ),
  );
  return errorArray;
};
