import * as Neverthrow from 'neverthrow';
import * as Flows from '@services/domain/errors/class/notEntityFound';
import { DATABASE_FLOW_REFERENCES } from '@services/domain/shared/valueObjects/databaseFlowReferences';
import { UnprocessableEntityErrors } from '@services/domain/errors/class/unprocessableEntity';
import * as ErrorsBuilder from '@services/domain/errors/errorsBuilder';

export const neverthrowForbiddenError = (entity: Neverthrow.Err<unknown, any>) => {
  if (!entity.error.name || entity.error.name === DATABASE_FLOW_REFERENCES.UNKNOWN_ERROR) {
    return Neverthrow.err(new Flows.NotEntityFoundFlow());
  }
  return Neverthrow.err(new UnprocessableEntityErrors(entity.error.name));
};

export const neverthrow422Error = (entity: Neverthrow.Err<unknown, any>):
Neverthrow.Err<unknown, UnprocessableEntityErrors
> => Neverthrow.err(new UnprocessableEntityErrors(entity.error.name));

export const neverthrow422ErrorValidator = (errors: any) => {
  const data = ErrorsBuilder.buildEntityError(errors);
  return Neverthrow.err(new UnprocessableEntityErrors(data));
};
