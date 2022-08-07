import React from 'react'
import Hero from './Hero.js'
import Section from './Section.js'
import Projects from './Projects.js'

const Home = () => {

    
    return (
        <div>
        <Hero name="Quentin Rankin" job="Software Engineer"/>
        <div className="home-container">
        <Section/>
        <Projects/>
        </div>
        </div>
    )
}

export default Home
