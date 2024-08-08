import React, { useEffect } from 'react'
import Header from '../../Global/Header'
import Home from './Home/Home'
import About from './About/About'
import Skills from './Skills/Skills'
import RecentProjects from './RecentProjects/RecentProjects'
import Experience from './Experience/Experience'

const Main = () => {
    const animationPlayed = sessionStorage.getItem('animationPlayed') || false;

    useEffect(() => {
        if (!animationPlayed) {
            document.documentElement.style.overflow = 'hidden';

            const timeoutId = setTimeout(() => {
                document.documentElement.style.overflow = '';
            }, 6500);

            return () => clearTimeout(timeoutId);
        }
    }, [animationPlayed]);

    return (
        <>
            <Header />

            <div className="relative flex flex-col gap-5 px-5 sm:px-10 md:px-14 3xl:px-24">
                <Home />
                <About />
                <Skills />
                <RecentProjects />
                <Experience />
                {/* <Testimonials /> */}
            </div>
        </>
    )
}

export default Main