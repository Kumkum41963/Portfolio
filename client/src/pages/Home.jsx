import React from 'react'
import {  Banner, About, Skills, Projects, Contact, Github } from '../components'

function Home() {
    return (
        <div className="min-h-screen bg-ambient grain">
            <div className="relative z-10">
                <Banner />
                <About />
                <Github/>
                <Skills />
                <Projects />
                <Contact />
            </div>
        </div>
    )
}

export default Home