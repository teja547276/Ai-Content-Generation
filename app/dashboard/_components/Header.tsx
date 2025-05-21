import { UserButton } from '@clerk/nextjs'
import { Search, Menu } from 'lucide-react'
import React from 'react'

function Header({ onMenuClick }: { onMenuClick: () => void }) {
  return (
    <div className='p-3 md:p-5 shadow-sm border-b-2 flex justify-between items-center bg-white sticky top-0 z-10'>
      <div className='flex items-center gap-4'>
        <button 
          onClick={onMenuClick}
          className='md:hidden p-1 rounded-md hover:bg-gray-100'
        >
          <Menu className='h-5 w-5' />
        </button>
        <div className='flex gap-2 items-center p-2 border rounded-md w-full md:max-w-lg bg-white'>
          <Search className='h-4 w-4 md:h-5 md:w-5'/>
          <input type='text' placeholder='Search...' className='outline-none w-full text-sm md:text-base'/>
        </div>
      </div>
      <div className='flex items-center ml-2'>
        <UserButton afterSignOutUrl='/'/>
      </div>
    </div>
  )
}

export default Header