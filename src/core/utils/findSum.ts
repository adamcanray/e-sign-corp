export const findSum = (
  arr: Array<number>,
  sum_target: number
): Array<Array<number>> | undefined => {
  let result: Array<Array<number>> = [];
  for (let a: number = 0; a < arr.length; a++) {
    for (let b: number = 0; b < arr.length; b++) {
      const sum = arr[a] + arr[b];
      if (sum === sum_target) {
        result.push([arr[a], arr[b]]);
      }
    }
  }
  return result;
};
