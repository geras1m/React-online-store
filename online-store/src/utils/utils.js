export const minAndMaxValueFromArray = (arr) => {
  const arrOfPrices = arr.map(item => item.price);
  return [Math.min(...arrOfPrices), Math.max(...arrOfPrices)];
};

export const getTotalAndLastStockCount = (category, nameOfCategory, products, filteredProducts) => {
  const totalStock = products.filter(el => el[category] === nameOfCategory).length;
  const currentStock = filteredProducts.filter(el => el[category] === nameOfCategory).length;
  return [currentStock, totalStock];
};
