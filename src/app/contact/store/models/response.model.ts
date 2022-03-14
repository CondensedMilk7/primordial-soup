export interface ContactSuccessResponse {
  next: string;
  ok: boolean;
}

export interface ContactErrorResponse {
  error: {
    error: string;
    errors: { code: string; field: string; message: string }[];
  };
}
