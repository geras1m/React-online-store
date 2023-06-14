import {typesOfSort} from "../const/const";

export const getRoundCountWithDiscount = (price, discount) => {
  return (+price - +price * (+discount / 100)).toFixed(2)
}

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

export const getSortedArray = (array, typeOfSorting) => {
  let sortedProducts;
  switch (typeOfSorting) {
    case typesOfSort.priceUp:
      sortedProducts = array.slice().sort((a, b) => Number(a.price) - Number(b.price));
      break;
    case typesOfSort.priceDown:
      sortedProducts = array.slice().sort((a, b) => Number(b.price) - Number(a.price));
      break;
    case typesOfSort.ratingUp:
      sortedProducts = array.slice().sort((a, b) => Number(a.rating) - Number(b.rating));
      break;
    case typesOfSort.ratingDown:
      sortedProducts = array.slice().sort((a, b) => Number(b.rating) - Number(a.rating));
      break;
    default:
      sortedProducts = array;
  }
  return sortedProducts;
}


