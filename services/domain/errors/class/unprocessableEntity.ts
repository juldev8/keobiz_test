import { ApiError } from '@services/domain/errors/class/error';

export class UnprocessableEntityErrors extends ApiError {
  constructor(message: string) {
    super(message, 422);
  }
}
