import React from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { Skill } from './components/Skill'
import { Certificate } from './components/Certificate'
import { Services } from './components/Services'


const Template = () => {
  return (
    <div>
        <Navbar/>
        <Hero/>
        <Skill/>
        <Certificate/>
        <Services/>
    </div>
  )
}

export default Template