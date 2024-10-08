// eslint-disable-next-line @typescript-eslint/ban-types
export const waitFor = function (check: Function, then: Function) {
  if (!check()) setTimeout(waitFor, 1000, check, then);
  else then();
};

export const sleep = (ms: number) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};
