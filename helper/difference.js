const difference = (a, b) => {
  const setOfB = new Set(b);
  return a.filter(each => !setOfB.has(each));
};

export default difference;
