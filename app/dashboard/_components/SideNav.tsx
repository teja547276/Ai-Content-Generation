"use client";
import React, { useEffect } from 'react'
import Image from 'next/image'
import { FileClock, Home, Settings, WalletCards, X } from 'lucide-react'
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import UsageTrack from './UsageTrack';

function SideNav({ onCloseMobile }: { onCloseMobile: () => void }) {
    const MenuListItems = [
        { name: 'Home', icon: Home, path: '/dashboard' },
        { name: 'History', icon: FileClock, path: '/dashboard/history' },
      
        { name: 'Settings', icon: Settings, path: '/dashboard/settings' }
    ];
    
    const p = usePathname();
    
    useEffect(() => {
        console.log(p)
    }, []);
    
    return (
        <div className='h-screen relative p-6 shadow-sm border bg-white w-72'>
            {/* Mobile close button */}
            <button 
                onClick={onCloseMobile}
                className='md:hidden absolute top-2 right-2 p-1 rounded-full hover:bg-gray-100'
            >
                <X className='h-5 w-5' />
            </button>
            
            <div className='flex justify-center'>
                <Image src={'/logo.svg'} alt='logo' width={80} height={80}/>
            </div>
            
            <hr className='my-5'/>
            
            <div className='mt-4'>
                {MenuListItems.map((menu, index) => (
                    <Link href={menu.path} key={index}>
                        <div className={`flex gap-2 mb-2 p-3 hover:bg-primary hover:text-white rounded-lg cursor-pointer items-center ${
                            p == menu.path && 'bg-primary text-white'
                        }`}>
                            <menu.icon className='h-6 w-6'/>
                            <h2 className='text-lg'>{menu.name}</h2>
                        </div>
                    </Link>
                ))}
            </div>
            
            <div className='absolute bottom-10 mb-5 left-0 w-full '>
                <UsageTrack/>
            </div>
        </div>
    )
}

export default SideNav