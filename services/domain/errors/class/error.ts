export class ApiError extends Error {
  status: number;

  constructor(message: string | undefined, status: number) {
    super(message);
    this.name = this.constructor.name;
    this.status = status || 500;
  }
}
