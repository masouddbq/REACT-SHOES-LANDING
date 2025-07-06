import React from 'react'
import Navbar from '../Navbar/Navbar'

export default function Sport() {
  const sportShoes = [
    {
      id: 1,
      name: 'کفش فوتبال',
      price: '۳۵۰,۰۰۰ تومان',
      image: '/puma.png'
    },
    {
      id: 2,
      name: 'کفش بسکتبال',
      price: '۴۲۰,۰۰۰ تومان',
      image: '/all-star.png'
    }
  ];

  return (
    <>
        <Navbar />
        <div className="min-h-screen bg-gray-50">
            {/* Header */}
            <div className="bg-gradient-to-r from-blue-500 to-green-600 text-white py-16">
                <div className="container mx-auto px-4">
                    <h1 className="text-4xl font-bold text-center mb-4">کفش‌های اسپرت</h1>
                    <p className="text-center text-lg opacity-90">برای ورزش و فعالیت‌های بدنی</p>
                </div>
            </div>

            {/* Products */}
            <div className="container mx-auto px-4 py-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                    {sportShoes.map((shoe) => (
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
                                <p className="text-lg font-bold text-blue-600">{shoe.price}</p>
                                <button className="w-full mt-3 bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition-colors duration-300">
                                    افزودن به سبد خرید
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </>
  )
} 