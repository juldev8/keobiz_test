import { Response } from 'express';
import * as Neverthrow from 'neverthrow';
import * as Flows from '@services/domain/errors/class/notEntityFound';
import { UnprocessableEntityErrors } from '@services/domain/errors/class/unprocessableEntity';

export const sendResponse = <T, Y>(
  response: Response,
  result: Neverthrow.Result<T, Y>,
  successCode: number,
  sendValue: boolean = true,
) => {
  if (result.isErr()) {
    if (result.error instanceof Flows.NotEntityFoundFlow) {
      return response.status(404).send();
    }
    if (result.error instanceof UnprocessableEntityErrors) {
      return response.status(422).send(result.error);
    }
    return response.send(result.error);
  }

  return response.status(successCode).send(sendValue ? result.value : '');
};
