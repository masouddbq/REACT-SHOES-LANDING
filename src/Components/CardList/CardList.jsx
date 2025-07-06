import React from 'react'
import Card from './Card'

export default function CardList(props) {

    const cardInfos = [
        {id : 1 ,imgUrl : '/all-star.png', productTitle : 'آل-استار' , color : 'blue' , size : '40-44',price :'50$'},
        {id : 2 ,imgUrl : '/balenciaga.png', productTitle : 'بالنسیاگا پتیت' , color : 'pink' , size : '37-42',price :'50$'},
        {id : 3 ,imgUrl : '/puma.png', productTitle : 'پوما تینیجر' , color : 'white' , size : '38-42',price :'50$'},
        {id : 4 ,imgUrl : '/soft.png', productTitle : 'سافت' , color : 'brown' , size : '40-47',price :'50$'}
    ]

  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-4'>
       {cardInfos.map(product => (
            <Card 
              key={product.id}
              imgUrl={product.imgUrl} 
              productTitle={product.productTitle} 
              color={product.color} 
              size={product.size} 
              price={product.price}  
            />
       ))}
    </div>
  )
}
