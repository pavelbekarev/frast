export interface ISubmitData<T = Record<string, unknown>> {
  submitId: number;
  values: T;
}
