import { SerializedError } from "@reduxjs/toolkit";

export interface IAsyncState {
  isLoading: boolean;
  data: unknown;
  error: SerializedError | null;
}

export const reducerUtils = {
  initial: (data = null): IAsyncState => ({
    isLoading: false,
    data,
    error: null,
  }),
  loading: (preveState = null): IAsyncState => ({
    data: preveState,
    isLoading: true,
    error: null,
  }),
  success: (data: unknown): IAsyncState => ({
    data,
    isLoading: false,
    error: null,
  }),
  error: (error: SerializedError): IAsyncState => ({
    data: null,
    isLoading: false,
    error,
  }),
};
