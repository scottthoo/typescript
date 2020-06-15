export const dateStringToDate = (dateString: string): Date => {
  // 28/10/2020
  const dateParts = dateString.split('/').map((value: string): number => {
    return parseInt(value);
  });
  return new Date(dateParts[2], dateParts[1] - 1, dateParts[0]); // -1 is Jan = 0, Feb = 1 . . .
};
