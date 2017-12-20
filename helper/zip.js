// Creates an array of elements, grouped based on the position in the original arrays.

//zip(['a', 'b'], [1, 2], [true, false]); -> [['a', 1, true], ['b', 2, false]]
//zip(['a'], [1, 2], [true, false]); -> [['a', 1, true], [undefined, 2, false]]

const zip = (...arrays) => {
  const maxLen = Math.max(...arrays.map(x => x.length));
  const zippedArrays = [];
  for (let i = 0; i < maxLen; i += 1) {
    const zippedArr = [];
    arrays.forEach(array => {
      zippedArr.push(array[i]);
    });
    zippedArrays.push(zippedArr);
  }
  return zippedArrays;
};

