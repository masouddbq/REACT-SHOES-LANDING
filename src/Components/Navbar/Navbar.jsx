import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import { Button } from '@mui/material';

export default function Navbar() {

  const navLinks = [
    { name: 'اسپرت', url: '/sport' },
    { name: 'ورزشی', url: '/sports' },
    { name: 'زنانه', url: '/women' },
    { name: 'کوهنوردی', url: '/hiking' },
    { name: 'صندل', url: '/sandal' }
]

  

    
  return (
    <>
        <div className='flex justify-evenly items-center pt-4'>
            <ul className='flex justify-between'>
                {navLinks.map((link, index) => (
                    <Link key={index} className='mx-1 p-1 tag-hover' to={link.url}>
                        {link.name}
                    </Link>
                ))}
            </ul>
            <div className='flex items-center gap-2'>
                <input type="text" placeholder='جستجو' className='hidden sm:block text-center p-1 outline-none rounded-lg bg-gray-100' />
                <Button>
                  <SearchIcon fontSize='large' color='error'/>
                </Button>
            </div>
        </div>
    </>
  )
}
