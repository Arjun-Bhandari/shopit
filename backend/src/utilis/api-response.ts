interface IApiResponse {
  success: boolean;
  message: string;
  data?: any;
  statusCode: number;
}

export class ApiResponse {
  readonly success: boolean;
  readonly message: string;
  readonly data: any;
  readonly statusCode: number;

  constructor({
    success = true,
    message,
    data,
    statusCode = 200,
  }: IApiResponse) {
    this.success = success;
    this.message = message;
    this.data = data;
    this.statusCode = statusCode;
  }

  static success({
    data,
    message = "Success",
    statusCode = 200,
  }: Partial<IApiResponse>) {
    return new ApiResponse({
      success: true,
      message,
      data,
      statusCode,
    });
  }

  static error({
    message = "Error occurred",
    statusCode = 500,
  }: Partial<IApiResponse>) {
    return new ApiResponse({
      success: false,
      message,
      data: null,
      statusCode,
    });
  }
}

export class ApiError extends Error {
  readonly statusCode: number;
  readonly success: boolean = false;
  constructor(message: string, statusCode: number = 500) {
    super(message);
    this.statusCode = statusCode;
    this.name = "ApiError";
    Error.captureStackTrace(this, this.constructor);
  }
  static badRequest(message: string = "Bad Request") {
    return new ApiError(message, 400);
  }

  static unauthorized(message: string = "Unauthorized") {
    return new ApiError(message, 401);
  }

  static forbidden(message: string = "Forbidden") {
    return new ApiError(message, 403);
  }
  static notFound(message: string = "Not Found") {
    return new ApiError(message, 404);
  }

  static internal(message: string = "Internal Sever Error") {
    return new ApiError(message, 500);
  }
}
