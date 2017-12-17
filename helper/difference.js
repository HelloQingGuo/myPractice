// difference([1,2,2,3,3], [1,1,2]) -> [3,3]
const difference = (a, b) => {
  const setOfB = new Set(b);
  return a.filter(each => !setOfB.has(each));
};

export default difference;
