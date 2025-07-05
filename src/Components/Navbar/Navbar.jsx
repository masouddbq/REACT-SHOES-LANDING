import React from 'react'
import './Navbar.css'
import SearchIcon from '@mui/icons-material/Search';
import { Button } from '@mui/material';

export default function Navbar() {

    
  return (
    <>
        <div className='flex justify-evenly items-center pt-4'>
            <ul className='flex justify-between'>
                <a className='mx-1 p-1 tag-hover' href="">اسپرت</a>
                <a className='mx-1 p-1 tag-hover' href="">ورزشی</a>
                <a className='mx-1 p-1 tag-hover' href="">زنانه</a>
                <a className='mx-1 p-1 tag-hover' href="">کوهنوردی</a>
                <a className='mx-1 p-1 tag-hover' href="">صندل</a>
            </ul>
            <div className='flex items-center gap-2'>
                <input type="text" placeholder='جستجو' className='text-center p-1 outline-none rounded-lg bg-gray-100' />
                <Button>
                  <SearchIcon fontSize='large' color='error'/>
                </Button>
            </div>
        </div>
    </>
  )
}
