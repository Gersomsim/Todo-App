export interface ApiResponse<T> {
  success: boolean;
  message: string | string[];
  error?: {
    code: string;
    statusCode: number;
  };
  data: T;
  meta: {
    timestamp: string;
    requestId: string;
  };
}
