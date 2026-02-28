export interface SpendingData {
  [category: string]: number;
}

export interface SpendingRequest {
  category: string;
  amount: number;
}

export interface ApiResponse {
  message: string;
  spending?: SpendingData;
  error?: string;
}