// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react'
import './main.module.css'
import ProductScene from '../ProductScene/ProductScene'
import ProductList from '../ProductsList/ProductList'
import productsData from '../../appdata/products'

const Main = () => {

  const [ products, setProducts ] = useState([ ...productsData ]);
  const currentPicked = products.find(element => element.isPicked)

  // eslint-disable-next-line no-unused-vars
  const tooglePick = (id) => e => {

    setProducts(
      products.map(product => ({
          id: product.id,
          image: product.image,
          title: product.title,
          description: product.description,
          isPicked: product.id === id ? !product.isPicked : false
      }))
    )
  
  }

  return (
    <div className='flex flex-col gap-16 pb-16'>
      <h2 className='text-4xl font-bold text-gray-50'>
        Available products
      </h2>
      <ProductList products={products} tooglePick={tooglePick}/>
      {
        currentPicked 
        ? <ProductScene
          id={currentPicked.id}
          image={currentPicked.image} 
          title={currentPicked.title} 
          description={currentPicked.description}
          tooglePick={tooglePick}
        /> 
        : <h3 className='m-16 text-2xl text-gray-50'>Product was not picked!</h3>
      }

    </div>
  )

}

export default Main
