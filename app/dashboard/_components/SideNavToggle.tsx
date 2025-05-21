"use client"
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { useSideNav } from '@/app/(context)/SideNavContext'

export default function SideNavToggle() {
  const { isOpen, toggleSideNav } = useSideNav()

  return (
    <button 
      onClick={toggleSideNav}
      className="hidden md:flex items-center justify-center absolute -right-3 top-5 bg-white rounded-full p-1 border shadow-sm hover:bg-gray-100"
    >
      {isOpen ? <ChevronLeft className="h-4 w-4" /> : <ChevronRight className="h-4 w-4" />}
    </button>
  )
}