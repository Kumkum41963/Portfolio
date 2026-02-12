import React from 'react'
import { Navbar, Footer, Banner, About, Skills, Projects, Contact } from '../components'

function Home() {
    return (
        <div className="min-h-screen bg-ambient grain">
            <a
                href="#main"
                className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-xl focus:bg-card focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:ring-4 focus:ring-primary/15"
                data-testid="skip-to-content"
            >
                Skip to content
            </a>

            <div className="relative z-10">
                <Navbar />
                {/* <Main /> */}
                <Banner />
                <About />
                <Skills />
                <Projects />
                <Contact />
                <Footer />
            </div>
        </div>
    )
}

export default Home