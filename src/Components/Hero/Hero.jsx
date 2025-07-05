import React from 'react'
import './Hero.css'
import { Button } from '@mui/material'

export default function Hero() {
  return (
    <>
    <section className='text-center'>
        <div className='flex justify-evenly items-center container'>
            <div>
                <img className='w-96 animate-fade-in' src="/shoe-angle.png" alt="" />
            </div>
            <div className='flex-col justify-center items-center text-center'>
                <h1 className='animate-scale-in text-6xl'>کفش نارین</h1>
                <p className='mt-10 mb-4 animate-fade-left'>پاتو توی هر کفشی دلت میخواد بکن</p>
                <Button variant='contained' size='large' className='persian-font white-button animate-scale-in'>ثبت سفارش</Button>
            </div>
        </div>
        <a href="" className='text-6xl animate-pulse'>اینجا هر مدلی بخوای پیدا میشه</a>
    </section>
    </>
  )
}
