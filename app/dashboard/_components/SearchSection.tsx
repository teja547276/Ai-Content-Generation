import { Search } from 'lucide-react'
import React from 'react'

function SearchSection({onSearchInput}:any) {
  return (
    <div className='p-10 bg-gradient-to-br from bg-purple-500 via-purple-700 to-blue-600
     flex  flex-col justify-center items-center text-white'>
        <h2 className='text-3xl font-bold'>Browse All templates </h2>
        <p>What would u like to create Today??</p>
        <div className='w-full flex justify-center'>
            <div className='flex gap-2 items-center p-2 border rounded-md bg-white my-5 w-[30%]'>
                <Search className='text-violet-700'/>
                <input type='text' placeholder='Search' 
                className='bg-transparent w-full outline-none text-black'
                onChange={(event)=>onSearchInput(event.target.value)}/>

            </div>
        </div>
    </div>
  )
}

export default SearchSection