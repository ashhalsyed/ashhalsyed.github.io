import React, { useRef } from "react";
import "../styles/allStyles.scss";
import { allProjectsData } from '../allData'
// import Ripples from 'react-ripples'

function allProjects(props) {

	let pageBackgroundColour = { backgroundColor: '#fff' }
	let pageTextColour = { color: '#000' };
	let projectLinkStyle = { border: '2px solid #000' }
	let projectContentStyle = { border: '2px solid #000' }
	if (props.theme === 'dark') {
		pageBackgroundColour = { backgroundColor: '#000' }
		pageTextColour = { color: '#fff' }
		projectLinkStyle = { border: '2px solid #fff' }
		projectContentStyle = { border: '2px solid #fff' }
	}

	let allProjectRefs = {};

	let allProjectLinksJSX = []
	allProjectsData.forEach(project => {

		projectLinkStyle = { ...projectLinkStyle, background: `url(${project.image})`, backgroundSize: '19rem', backgroundRepeat: 'no-repeat' };
		allProjectLinksJSX.push(
			<div className='projectLink' style={projectLinkStyle} key={'Project Link:' + project.name} onClick={() => scrollToProject(allProjectRefs[project.name])}>
				<p className='projectName'>{project.name}</p>
				<p className='projectDescription' > {project.description}</p >
			</div>
		)
	});

	let allProjectsJSX = []
	allProjectsData.forEach(project => {

		const projectRef = useRef(null)
		allProjectRefs[project.name] = projectRef

		let allFeaturesJSX = []
		project.features.forEach(feature => {
			allFeaturesJSX.push(
				<li style={pageTextColour} className='feature' key={feature}>{feature}</li>
			)
		})

		let allTechnologiesJSX = []
		project.technologies.forEach(technology => {
			allTechnologiesJSX.push(
				<div className='technology' key={technology.name}>
					<a className='technologyLogoLink' href={technology.link}>
						<img className='technologyLogo' src={technology.image} alt='technology used preview' />
					</a>
					<p className='technologyPurpose' style={pageTextColour}>{technology.purpose}</p>
				</div>
			)
		})

		let projectDemoButton;
		if (project.demoLink !== '') {
			projectDemoButton = <a className='projectButton demo' href={project.demoLink} target='_blank' rel="noopener noreferrer">DEMO</a>
		}

		allProjectsJSX.push(
			<div className='project' key={project.name} ref={projectRef}>
				<p className='projectName' style={pageTextColour}>{project.name}</p>
				<div className='projectWrapper'>
					<img className='projectImage' src={project.image} alt='project preview' style={projectContentStyle} />
					<div className='projectMain'>
						<div className='projectButtons'>
							<a className='projectButton code' href={project.codeLink} target='_blank' rel="noopener noreferrer">CODE</a>
							{projectDemoButton}
						</div>
						<div className='projectTextWrapper'>
							<div className='projectTextColumnOne'>
								<div className='objective'>
									<p className='title' style={pageTextColour}>Objective</p>
									<p className='content' style={pageTextColour}>{project.objective}</p>
								</div>
								<div className='features'>
									<p className='featuresTitle' style={pageTextColour}>Features</p>
									<ul className='allFeatures'>
										{allFeaturesJSX}
									</ul>
								</div>
							</div>
							<div className='projectTextColumnTwo'>
								<div className='technologies'>
									<p className='technologiesTitle' style={pageTextColour}>Technologies Used</p>
									{allTechnologiesJSX}
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	});

	const scrollToProject = (project) => {
		const offsetForNavbar = (props.windowWidth >= 1024) ? 72 : 116
		window.scrollTo(0, project.current.offsetTop - offsetForNavbar)
	}

	return (
		<div className="allProjects" style={pageBackgroundColour}>
			<p className='projectsTitle' style={pageTextColour} >Projects</p>
			<div className='allProjectLinks' >
				{allProjectLinksJSX}
			</div>
			<div className='allProjectContent'>
				{allProjectsJSX}
			</div>
		</div>
	);
}

export default allProjects;