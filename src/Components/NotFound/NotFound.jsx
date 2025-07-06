import React from 'react'
import Navbar from '../Navbar/Navbar'
import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <>
        <Navbar />
        <div className="min-h-screen bg-gray-50 flex items-center justify-center">
            <div className="text-center">
                <div className="mb-8">
                    <h1 className="text-9xl font-bold text-gray-300">۴۰۴</h1>
                    <h2 className="text-3xl font-semibold text-gray-700 mb-4">صفحه مورد نظر یافت نشد!</h2>
                    <p className="text-gray-600 mb-8">متأسفانه صفحه‌ای که به دنبال آن هستید وجود ندارد.</p>
                </div>
                
                <div className="space-y-4">
                    <Link 
                        to="/" 
                        className="inline-block bg-blue-500 text-white px-8 py-3 rounded-lg hover:bg-blue-600 transition-colors duration-300"
                    >
                        بازگشت به صفحه اصلی
                    </Link>
                    
                    <div className="text-sm text-gray-500">
                        <p>یا می‌توانید از منوی بالا استفاده کنید</p>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
} 