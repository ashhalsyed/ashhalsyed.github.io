import calcCardsPreview from './assets/calcCardsPreview.png'
import valorantGuidesPreview from './assets/valorantGuidesPreview.png'
import str60Preview from './assets/str60Preview.png'
import computerScienceAventureQuizPreview from './assets/computerScienceAdventureQuizPreview.png'

import reactLogo from './assets/reactLogo.svg'
import firebaseLogo from './assets/firebaseLogo.png'
import sassLogo from './assets/sassLogo.svg'
import illustratorLogo from './assets/illustratorLogo.svg'
import fontAwesomeLogo from './assets/fontAwesomeLogo.svg'
import reactRouterLogo from './assets/reactRouterLogo.png'
import valorantLogo from './assets/valorantLogo.svg'
import pythonLogo from './assets/pythonLogo.svg'
import pygameLogo from './assets/pygameLogo.gif'
import flamingTextLogo from './assets/flamingTextLogo.png'
import PublisherLogo from './assets/PublisherLogo.svg'
import easyGuiLogo from './assets/easyGuiLogo.png'
import paintLogo from './assets/paintLogo.png'

export const allProjectsData = [
    {
        name: 'Calc Cards',
        description: 'A platform for creating and using calc cards',
        image: calcCardsPreview,
        objective: `The goal of this app was to create a tool that made 
        it easy to calculate a missing value when you enter all the known values. 
        The way the code is structured makes it easy to add new cards for any other 
        calculation`,
        features: [
            'SAS cosine law, SSS cosine law, and slope calculator',
            'Ability to save cards by utilizing local storage',
            'Ability to search for any calc card by typing words used in its name',
            'Other resources page with youtube and web site links for each calculator',
            'Request a card page with ability to preview',
            'Backend Firebase database for card submissions'
        ],
        technologies: [
            {
                name: 'react',
                image: reactLogo,
                purpose: 'Logic and layout',
                link: 'https://reactjs.org/'
            },
            {
                name: 'firebase',
                image: firebaseLogo,
                purpose: 'Backend database',
                link: 'https://firebase.google.com/'
            },
            {
                name: 'sass',
                image: sassLogo,
                purpose: 'Faster styling',
                link: 'https://sass-lang.com/'
            },
            {
                name: 'illustrator',
                image: illustratorLogo,
                purpose: 'All graphics and mockups',
                link: 'https://www.adobe.com/ca/products/illustrator.html'
            },
            {
                name: 'fontAwesome',
                image: fontAwesomeLogo,
                purpose: 'Icons',
                link: 'https://fontawesome.com/'
            },

        ],
        codeLink: 'https://github.com/ashhalsyed/Calc-Cards',
        demoLink: 'https://ashhalsyed.github.io/Calc-Cards/',

    },
    {
        name: 'Valorant Guides',
        description: 'A wiki site for Valorant agents, abilities, weapons, and guides',
        image: valorantGuidesPreview,
        objective: `I started this project during the beta release of 
        Valorant to help the community learn more about the game and 
        what it has to offer. I wanted to get gain experience building 
        a web app that primarily renders itself using an external data set. In this 
        case the data set was a huge list with all the agents, abilities, 
        weapons, and weapon stats.`,
        features: [
            'Single page application that renders and removes components based on the current url',
            'Agents screen with all agents, abilities, descriptions, and costs',
            'Weapons screen with all weapons, weapon stats, and costs',
            'Guides screen with tips and tricks and FAQ',
            'Modern UI and UX with high quality images and custom icons'
        ],
        technologies: [
            {
                name: 'react',
                image: reactLogo,
                purpose: 'logic and layout',
                link: 'https://reactjs.org/'
            },
            {
                name: 'React Router',
                image: reactRouterLogo,
                purpose: 'URL Routing',
                link: 'https://reactrouter.com/'
            },
            {
                name: 'sass',
                image: sassLogo,
                purpose: 'Faster styling',
                link: 'https://sass-lang.com/'
            },
            {
                name: 'illustrator',
                image: illustratorLogo,
                purpose: 'Mockups, logo, and custom icons',
                link: 'https://www.adobe.com/ca/products/illustrator.html'
            },
            {
                name: 'Valorant Beta',
                image: valorantLogo,
                purpose: 'High quality images and descriptions',
                link: 'https://playvalorant.com/'
            },

        ],
        codeLink: 'https://github.com/ashhalsyed/valorantGuides',
        demoLink: 'https://ashhalsyed.github.io/valorantGuides',

    },
    {
        name: 'Str (60)',
        description: 'A 2D video game where the goal is to stay alive for 60 seconds',
        image: str60Preview,
        objective: `I wanted to make a game that would help computer science students 
        learn programming concepts in a fun and intriguing way. I used pygame for the 
        core game loop and graphics and python for the logic.`,
        features: [
            'Home screen with music controls and exit button',
            'Gameplay screen with main character, health, and time left',
            'Options screen with instructions and credits',
            'Win and lose screens with calls to action',
            'Questions screen which picks from a list of random questions stored in a text file',
        ],
        technologies: [
            {
                name: 'python',
                image: pythonLogo,
                purpose: 'Logic and event handling',
                link: 'https://www.python.org/'
            },
            {
                name: 'pygame',
                image: pygameLogo,
                purpose: 'Gameplay loop and graphics',
                link: 'https://www.pygame.org/'
            },
            {
                name: 'Flaming Text',
                image: flamingTextLogo,
                purpose: 'Fonts',
                link: 'https://flamingtext.com/'
            },
            {
                name: 'Microsoft Publisher',
                image: PublisherLogo,
                purpose: 'Graphics and buttons',
                link: 'https://www.microsoft.com/en-us/microsoft-365/publisher'
            },

        ],
        codeLink: 'https://github.com/ashhalsyed/ICS4U-Culminating',
        demoLink: '',

    },
    {
        name: 'Computer Science Adventure Quiz',
        description: 'A maze game where the goal of the game is to reach the exit without losing all of your lives',
        image: computerScienceAventureQuizPreview,
        objective: `The goal of this game was to make somthing using python and easygui that would help students in my 
        grade 11 computer science class prepare for their exam. `,
        features: [
            'An introduction to the game with instructions on how to play in the terminal',
            'Dynamic enemies found text, lives, and a map made with text that all update after every move in the maze',
            'A pop-up dialogue box that asks the user for the direction to move in or exit the game',
            'A quiz dialogue box with graphics and a random computer science question'
        ],
        technologies: [
            {
                name: 'Python',
                image: pythonLogo,
                purpose: 'Logic and Dynamic Maze',
                link: 'https://www.python.org/'
            },
            {
                name: 'EasyGUI',
                image: easyGuiLogo,
                purpose: 'Dialogue boxes',
                link: 'https://pypi.org/project/easygui/'
            },
            {
                name: 'Paint',
                image: paintLogo,
                purpose: 'Graphics',
                link: 'https://support.microsoft.com/en-ca/help/4027344/windows-10-get-microsoft-paint'
            },

        ],
        codeLink: 'https://github.com/ashhalsyed/ICS3U-Culminating',
        demoLink: '',

    },
]