export const isNotANumber = (v: string | undefined) => {
  return Number.isNaN(Number(v));
};
