
"use client"
import React, { useState } from 'react'
import SearchSection from './_components/SearchSection'
import TemplateListSection from './_components/TemplateListSection'

function Dashboard () {
  const [userSearchInput,setSearchInput]=useState<string>();
  return (
    <div>
      {/*search Section */}
      <SearchSection onSearchInput={(value:string)=>setSearchInput(value)}/>
      {/*template list section*/}
      <TemplateListSection userSearchInput={userSearchInput}/>

    </div>
  )
}

export default Dashboard