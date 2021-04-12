import React, { useState } from 'react'
import NavBar from '@root/components/molekul/Navbar'
import SideBar from '@components/molekul/Sidebar'
import HeroSection from '@components/molekul/HeroSection'

const Home = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const toggle = () => {
    return setIsOpen(!isOpen)
  }
  return (
    <>
      <SideBar isOpen={isOpen} toggle={toggle} />
      <NavBar toggle={toggle} />
      <HeroSection />
    </>
  )
}

export default Home
