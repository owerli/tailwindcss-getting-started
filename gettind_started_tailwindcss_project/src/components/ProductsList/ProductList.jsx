// eslint-disable-next-line no-unused-vars
import React from 'react'
import './productList.module.css'
import ProductItem from './ProductsItem/ProductsItem'

// eslint-disable-next-line react/prop-types
const ProductList = ({ products, tooglePick }) => {

  return (
    <ul className='grid grid-cols-3 gap-8'>
      {
        products 
        // eslint-disable-next-line react/prop-types
        ? products.map(product => {
          return (
            <ProductItem
              key={product.id} 
              id={product.id}
              image={product.image} 
              title={product.title} 
              isPicked={product.isPicked}
              tooglePick={tooglePick}
            />
          )
        })
        : <p>Nothing to render!</p>
      }
    </ul>
  )

}

export default ProductList
