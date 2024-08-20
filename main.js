const itemsFilter = (items3, items4) => {
  const items3Filter = items3.filter((item) => item > 0);
  const items4Filter = items4.filter((item) => item > 0);

  return [...items3Filter, ...items4Filter];
};

const newItems = itemsFilter([1, -2, 3], [1, 0]);
console.log(newItems);
