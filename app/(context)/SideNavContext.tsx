"use client"
import React, { createContext, useContext, useState } from 'react'

const SideNavContext = createContext({
  isOpen: true,
  toggleSideNav: () => {}
})

export function SideNavProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(true)

  const toggleSideNav = () => {
    setIsOpen(!isOpen)
  }

  return (
    <SideNavContext.Provider value={{ isOpen, toggleSideNav }}>
      {children}
    </SideNavContext.Provider>
  )
}

export const useSideNav = () => useContext(SideNavContext)