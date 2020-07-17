import React from "react";
import "../styles/allStyles.scss";
// import aboutMeImage from '../assets/aboutMeImage.png'
// import aboutMeImage from '../assets/aboutMeImage.svg'
import aboutMeImage from '../assets/Asset 4.svg'

function aboutMe(props) {

	let pageBackgroundColour = { backgroundColor: '#fff' }
	let pageTextColour = { color: '#000' };
	if (props.theme === 'dark') {
		pageBackgroundColour = { backgroundColor: '#000' }
		pageTextColour = { color: '#fff' }
	}

	return (
		<div className="aboutMe" style={pageBackgroundColour}>
			<p style={pageTextColour} className='welcomeText title'>Welcome</p>
			<p style={pageTextColour} className='welcomeText content' >Check out my projects or contact me at ashhalsyed@gmail.com</p>
			<div className='contactLinks'>
				<a className="linkedinLink" href='https://www.linkedin.com/in/ashhalsyed/' target="_blank" rel="noopener noreferrer">
					<i className="fab fa-linkedin"></i>
				</a>
				<a className="githubLink" href='https://github.com/ashhalsyed/' target="_blank" rel="noopener noreferrer">
					<i style={pageTextColour} className="fab fa-github-square"></i>
				</a>
			</div>
			<img className='aboutMeImage' src={aboutMeImage} alt='Ashhal' />
		</div>
	);
}

export default aboutMe;