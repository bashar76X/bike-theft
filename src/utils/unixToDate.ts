export const unixToDate = (timestamp: number) => {
  const date = new Date(timestamp * 1000).toLocaleDateString();
  return date;
};
