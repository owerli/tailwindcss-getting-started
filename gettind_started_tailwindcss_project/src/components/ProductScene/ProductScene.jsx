// eslint-disable-next-line no-unused-vars
import React from 'react'
import './productScene.module.css'

// eslint-disable-next-line react/prop-types
const ProductScene = ({ id, image, title, description, tooglePick }) => {

  return (
    <div>
      <h3 className='text-4xl font-bold text-gray-50 m-8'>Picked product</h3>
      <div className='p-8 bg-gray-50 bg-opacity-10 rounded-3xl'>
        <div className='flex flex-col items-center gap-4'>
          <img className='rounded-3xl' src={`/images/${image}`} alt={`Photo of the ${title}.`}></img>
          <div className='flex flex-col items-center gap-4'>
            <h4 className='mt-4 text-3xl text-gray-400'>{title}</h4>
            <p className='text-xl text-gray-400'>{description}</p>
            <button className='w-2/4 h-10 bg-gray-400 rounded-xl' onClick={tooglePick(id)}>Unpick</button>
          </div>
        </div>
      </div>
    </div>
  )

}

export default ProductScene
