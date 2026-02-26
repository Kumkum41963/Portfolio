import React from 'react'
import { Navbar, Footer, Banner, About, Skills, Projects, Contact, Resume } from '../components'

function Home() {
    return (
        <div className="min-h-screen bg-ambient grain">
            <div className="relative z-10">
                <Banner />
                <About />
                <Skills />
                <Projects />
                <Contact />
            </div>
        </div>
    )
}

export default Home