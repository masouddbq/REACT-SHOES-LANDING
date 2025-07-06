import React from 'react'

export default function Card({imgUrl,productTitle,color,size,price}) {
  return (
    <div className='flex flex-col gap-3 text-center rounded-2xl mt-14 m-8 p-2 shadow-2xl shadow-gray-300-300 bg-transparent hover:shadow-xl transition-shadow duration-500'>
        <img src={imgUrl} alt={productTitle} className='w-full h-56 object-contain bg-gray-100 rounded-lg' />
        <h2 className='text-xl font-bold text-gray-800'>{productTitle}</h2>
        <h4 className='text-sm text-gray-600'>رنگ: {color}</h4>
        <p className='text-sm text-gray-600'>سایز: {size}</p>
        <h3 className='text-lg font-semibold text-blue-600'>{price}</h3>
    </div>
  )
}
