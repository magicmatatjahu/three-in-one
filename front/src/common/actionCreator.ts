export function actionCreator<T = unknown>(type: string) {
  return (payload?: T) => ({
    type, 
    payload,
  });
}

export type ActionCreator = ReturnType<typeof actionCreator>;