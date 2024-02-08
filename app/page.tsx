import React from 'react'
import { CollaborativeApp } from './CollaborativeApp'
import { Navbar } from '@/components/Navbar'
import Image from 'next/image'
import Body from '@/components/Body'
import Footer from '@/components/Footer'

const page = () => {
  return (
    <>
      <Navbar/>
      <Body/>
      {/* <Footer/> */}
      {/* <CollaborativeApp/> */}
    </>
  )
}

export default page