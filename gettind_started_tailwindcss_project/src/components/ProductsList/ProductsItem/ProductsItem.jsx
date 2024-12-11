// eslint-disable-next-line no-unused-vars
import React from 'react'
import './productItem.module.css'

// eslint-disable-next-line react/prop-types
const ProductItem = ({ id, image, title, isPicked, tooglePick }) => {

  return (
    <li className='bg-gray-50 bg-opacity-10 p-4 rounded-3xl'>
      <div>
        <img className='rounded-3xl' src={`/images/${image}`} alt={`Photo of the ${title}.`}></img>
      </div>
      <div className='flex flex-col items-center gap-4'>
        <h4 className='mt-4 text-xl text-gray-400'>{title}</h4>
        <button className='w-3/4 h-10 bg-gray-400 rounded-xl' onClick={tooglePick(id)}>{isPicked ? 'Unpick' : 'Pick'}</button>
      </div>
    </li>
  )

}

export default ProductItem
