import React, { useState, useRef } from "react";
import "./styles/allStyles.scss";
import Navbar from './Navbar/navbar'
import AboutMe from './AboutMe/aboutMe'
import AllProjects from './Projects/allProjects'
import useWindowSize from './watchWindowSizeReact'

function App() {

	if (localStorage.getItem('currentTheme') === null) {
		localStorage.setItem('currentTheme', 'light')
	}

	const [theme, setTheme] = useState(localStorage.getItem('currentTheme'));

	function toggleTheme() {
		if (theme === 'light') {
			setTheme('dark')
			localStorage.setItem('currentTheme', 'dark')
		} else {
			setTheme('light')
			localStorage.setItem('currentTheme', 'light')
		}
	}

	const [windowWidth, windowHeight] = useWindowSize();
	//gets the window size from the encapsulated function and saves it for use

	const aboutRef = useRef(null)
	const projectsRef = useRef(null)
	const offsetForNavbar = (windowWidth >= 1024) ? 72 : 116

	const scrollToTop = () => {
		window.scrollTo(0, 0)
	}
	const scrollToAbout = () => {
		window.scrollTo(0, aboutRef.current.offsetTop)
	}
	const scrollToProjects = () => {
		window.scrollTo(0, projectsRef.current.offsetTop - offsetForNavbar)
	}

	console.log(window.scrollY)

	return (
		<div className="App">
			<Navbar theme={theme} toggleTheme={toggleTheme} scrollToProjects={scrollToProjects} scrollToAbout={scrollToAbout} scrollToTop={scrollToTop} />
			<div ref={aboutRef}>
				<AboutMe theme={theme} />
			</div>
			<div ref={projectsRef}>
				<AllProjects theme={theme} windowWidth={windowWidth} windowHeight={windowHeight} />
			</div>
		</div>
	);
}

export default App;
