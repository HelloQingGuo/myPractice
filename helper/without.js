// Filters out the elements of an array, that have one of the specified values.
// without([2, 1, 2, 3], 1, 2) -> [3]

const without = (arr, ...args) => {
  return arr.filter(each => !args.includes(each));
};
