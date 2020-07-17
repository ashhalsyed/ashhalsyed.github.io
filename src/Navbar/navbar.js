import React from "react";
import "../styles/allStyles.scss";
import logoBlack from '../assets/logoBlack.svg'
import logoWhite from '../assets/logoWhite.svg'
// import Ripples from 'react-ripples'

function navBar(props) {

	let logo = logoBlack;

	let pageBackgroundColour = { backgroundColor: '#eee' }
	let pageTextColour = { color: '#000' };
	let toggleBackgroundColour = { backgroundColor: '#000' }
	let toggleIconColour = { color: '#000' }

	let themeButton = <i className="fas fa-sun" style={toggleIconColour}></i>;
	let themeButtonStyle = { marginRight: '2rem', backgroundColor: '#fff' };
	if (props.theme === 'dark') {
		logo = logoWhite;

		pageBackgroundColour = { backgroundColor: '#222' }
		pageTextColour = { color: '#fff' }
		toggleBackgroundColour = { backgroundColor: '#fff' }
		toggleIconColour = { color: '#fff' }

		themeButton = <i className="fas fa-moon" style={toggleIconColour}></i>
		themeButtonStyle = { marginLeft: '2rem', backgroundColor: '#000' }
	}

	return (
		<div className="navBar" style={pageBackgroundColour}>
			{/* <Ripples color="rgba(255,255,255,0.3)" during={800}> */}
			<button className='logoLink' onClick={props.scrollToTop}>
				<img className='logo' src={logo} alt='personal logo' />
			</button>
			{/* </Ripples> */}
			<div className='navBarMainContent'>

				<div className='darkThemeToggle' style={toggleBackgroundColour} onClick={props.toggleTheme}>
					<button className='darkThemeButton' style={themeButtonStyle}>
						{themeButton}
					</button>
				</div>
				{/* <Ripples color="rgba(255,255,255,0.3)" during={800}> */}
				<button className='navbarLink about' style={pageTextColour} onClick={props.scrollToAbout}>About 2</button>
				{/* </Ripples> */}
				<button className='navbarLink projects' style={pageTextColour} onClick={props.scrollToProjects}>Projects</button>
			</div>
		</div>
	);
}

export default navBar;