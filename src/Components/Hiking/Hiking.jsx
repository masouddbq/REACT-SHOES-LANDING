import React from 'react'
import Navbar from '../Navbar/Navbar'

export default function Hiking() {
  const hikingShoes = [
    {
      id: 1,
      name: 'کفش کوهنوردی',
      price: '۵۵۰,۰۰۰ تومان',
      image: '/puma.png'
    },
    {
      id: 2,
      name: 'کفش پیاده‌روی',
      price: '۴۸۰,۰۰۰ تومان',
      image: '/soft.png'
    }
  ];

  return (
    <>
        <Navbar />
        <div className="min-h-screen bg-gray-50">
            {/* Header */}
            <div className="bg-gradient-to-r from-orange-500 to-brown-600 text-white py-16">
                <div className="container mx-auto px-4">
                    <h1 className="text-4xl font-bold text-center mb-4">کفش‌های کوهنوردی</h1>
                    <p className="text-center text-lg opacity-90">برای ماجراجویی و طبیعت‌گردی</p>
                </div>
            </div>

            {/* Products */}
            <div className="container mx-auto px-4 py-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                    {hikingShoes.map((shoe) => (
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
                                <p className="text-lg font-bold text-orange-600">{shoe.price}</p>
                                <button className="w-full mt-3 bg-orange-500 text-white py-2 rounded-lg hover:bg-orange-600 transition-colors duration-300">
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