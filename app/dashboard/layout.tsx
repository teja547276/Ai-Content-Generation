"use client"
import React, { useState } from 'react'
import SideNav from './_components/SideNav';
import Header from './_components/Header';
import { TotalUsageContext } from '../(context)/TotalUsageContext';

function layout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
  const [totalUsage, setTotalUsage] = useState<Number>(0);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  return (
    <TotalUsageContext.Provider value={{totalUsage, setTotalUsage}}>
      <div className='bg-slate-100 h-screen relative'>
        {/* Mobile overlay */}
        {mobileNavOpen && (
          <div 
            className="md:hidden fixed inset-0 bg-black/50 z-20"
            onClick={() => setMobileNavOpen(false)}
          />
        )}
        
        {/* SideNav - now with mobile support */}
        <div className={`md:w-72 fixed h-screen z-30 transition-all duration-300 ${
          mobileNavOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'
        }`}>
          <SideNav onCloseMobile={() => setMobileNavOpen(false)} />
        </div>
        
        {/* Main content area */}
        <div className='md:ml-72 h-full overflow-auto'>
          <Header onMenuClick={() => setMobileNavOpen(!mobileNavOpen)} />
          {children}
        </div>
      </div>
    </TotalUsageContext.Provider>
  )
}

export default layout;