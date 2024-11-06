export type CounterAction =
  | {
      type: "IncreaseBy";
      payload: { value: number };
    }
  | { type: "reset" };

export const doReset = (): CounterAction => ({ type: "reset" });

export const doIncreaseBy = (value: number): CounterAction => ({
  type: "IncreaseBy",
  payload: { value },
});
