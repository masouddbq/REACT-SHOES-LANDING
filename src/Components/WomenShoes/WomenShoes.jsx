import React from 'react'
import Navbar from '../Navbar/Navbar'
import { Link } from 'react-router-dom';

export default function WomenShoes() {
  const womenShoes = [
    {
      id: 1,
      name: 'کفش ورزشی زنانه',
      price: '۲۵۰,۰۰۰ تومان',
      image: '/puma.png',
      category: 'ورزشی'
    },
    {
      id: 2,
      name: 'کفش کتانی زنانه',
      price: '۱۸۰,۰۰۰ تومان',
      image: '/soft.png',
      category: 'کتانی'
    },
    {
      id: 3,
      name: 'کفش رسمی زنانه',
      price: '۳۲۰,۰۰۰ تومان',
      image: '/balenciaga.png',
      category: 'رسمی'
    },
    {
      id: 4,
      name: 'کفش اسپرت زنانه',
      price: '۲۱۰,۰۰۰ تومان',
      image: '/all-star.png',
      category: 'اسپرت'
    }
  ];

  const categories = ['همه', 'ورزشی', 'کتانی', 'رسمی', 'اسپرت'];

  return (
    <>
        <Navbar />
        <div className="min-h-screen bg-gray-50">
            {/* Header */}
            <div className="bg-gradient-to-r from-pink-500 to-purple-600 text-white py-16">
                <div className="container mx-auto px-4">
                    <h1 className="text-4xl font-bold text-center mb-4">کفش‌های زنانه</h1>
                    <p className="text-center text-lg opacity-90">بهترین انتخاب برای استایل شما</p>
                </div>
            </div>

            {/* Categories */}
            <div className="container mx-auto px-4 py-8">
                <div className="flex flex-wrap justify-center gap-4 mb-8">
                    {categories.map((category, index) => (
                        <button
                            key={index}
                            className="px-6 py-2 rounded-full bg-white border-2 border-pink-300 text-pink-600 hover:bg-pink-500 hover:text-white transition-colors duration-300"
                        >
                            {category}
                        </button>
                    ))}
                </div>

                {/* Products Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {womenShoes.map((shoe) => (
                    <Link to={`/women/${shoe.id}`} key={shoe.id}>
                        <div key={shoe.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                            <div className="h-48 bg-gray-200 flex items-center justify-center">
                                <img 
                                    src={shoe.image} 
                                    alt={shoe.name}
                                    className="h-32 w-auto object-contain"
                                />
                            </div>
                            <div className="p-4">
                                <h3 className="font-semibold text-gray-800 mb-2">{shoe.name}</h3>
                                <p className="text-sm text-gray-600 mb-2">{shoe.category}</p>
                                <p className="text-lg font-bold text-pink-600">{shoe.price}</p>
                                <button className="w-full mt-3 bg-pink-500 text-white py-2 rounded-lg hover:bg-pink-600 transition-colors duration-300">
                                    افزودن به سبد خرید
                                </button>
                            </div>
                        </div>
                    </Link>
                    ))}
                </div>
            </div>
        </div>
    </>
  )
}
