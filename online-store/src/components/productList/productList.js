import './productList.scss';
import SortPanel from "../sortPanel/SortPanel";
import Card from "../card/Card";

const ProductList = () => {
  return (
    <div className='product-list'>
      <SortPanel/>
      <div className='product-list__wrapper-card'>

        <Card link='https://i.dummyjson.com/data/products/2/thumbnail.jpg'/>
        <Card link='https://i.dummyjson.com/data/products/89/thumbnail.jpg'/>
        <Card link='https://i.dummyjson.com/data/products/82/thumbnail.jpg'/>
        <Card link='https://i.dummyjson.com/data/products/58/thumbnail.jpg'/>
        <Card link='https://i.dummyjson.com/data/products/41/thumbnail.webp'/>
        <Card link='https://i.dummyjson.com/data/products/27/thumbnail.webp'/>

      </div>
    </div>
  )
}

export default ProductList;
