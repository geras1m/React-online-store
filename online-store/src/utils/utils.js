export const minAndMaxValueFromArray = (arr, category) => {
  const arrOfPrices = arr.map(item => item[category]);
  return [Math.min(...arrOfPrices), Math.max(...arrOfPrices)];
};

export const getCurrentAndTotalStockCounts = (category, nameOfCategory, products, filteredProducts) => {
  const totalStock = products.filter(el => el[category] === nameOfCategory).length;
  const currentStock = filteredProducts.filter(el => el[category] === nameOfCategory).length;
  return [currentStock, totalStock];
};

export const isSubstringInStringInPropertyOfObject = (obj, property, subStr) => {
  return obj[property].toLowerCase().indexOf(subStr.toLowerCase())
}
