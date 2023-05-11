//TODO
//remove transition on pageload
// (function () {
//     console.log("doing", document.body)
//     document.body.classList.remove("noTransition");
// })()
// //IIFE Function to remove initial transiton


var timoutId = 0;
//for tooltip visibility timer resets

const projectsData = {
    lumina: {
        title: "Lumina Smart Blinds",
        description: "A web app used to control Smart Blinds. Worked with a team to convert a wired model into a wireless model using a lightweight tech stack. Implemented and optimized web server to faciliate interaction between app and blinds.<br><br>Built using HTML, CSS, and Vanilla Javascript for logic and layout, and Firebase's realtime database for web server communication.",
        bullets: [
            "point 1 lumina",
            "point 2 lumina",
            "point 3 lumina"
        ],
        tools: [
            "htmlIcon",
            "cssIcon",
            "javascriptIcon",
            "firebaseIcon",
            "arduinoIcon",
            "cplusplusIcon",
        ]
    },
    calcCards: {
        title: "Calc Cards",
        description: "A platform for using calculator widgets. Helps students better understand concepts related to cosine law and slope.<br><br>Built as a Single Page Application using React and Sass for logic and layout, Firebase's realtime database for user submissions, and Adobe Illustrator and Font Awesome for design, icons.",
        bullets: [
            "SAS cosine law, SSS cosine law, and slope calculator",
            "Ability to save cards by utilizing local storage",
            "Ability to search for any calc card by typing words used in its name",
            "Other resources page with youtube and web site links for each calculator",
            "Request a card page with ability to preview",
            "Backend Firebase database for card submissions"
        ],
        tools: [
            "reactIcon",
            "firebaseIcon",
            "sassIcon",
            "adobeIcon",
            "fontAwesomeIcon",
        ]
    },
    valorant: {
        title: "Valorant Guides",
        description: "Wiki site for Riot's tactical shooter: Valorant, with 1.5M+ daily active players. Created during the beta release of the game to assist players with staying up to date with current content.<br><br>Built as a Single Page Application using React and Sass for logic and layout, React-Router for routing, and Adobe Illustrator and Valorant for design, graphics",
        bullets: [
            "Single page application that renders and removes components based on the current url",
            "Agents screen with all agents, abilities, descriptions, and costs",
            "Weapons screen with all weapons, weapon stats, and costs",
            "Guides screen with tips, tricks, and FAQ",
            "Modern UI and UX with high quality images and custom icons"
        ],
        tools: [
            "reactIcon",
            "reactRouterIcon",
            "sassIcon",
            "adobeIcon",
            "valorantIcon",
        ]
    }
}

function updateProject(project) {
    window.localStorage.setItem("project", project)
    displayCurrentProject()
}

function displayCurrentProject() {

    if (window.localStorage.getItem("project") == null) {
        window.localStorage.setItem("project", "lumina")
    }

    const project = window.localStorage.getItem("project")


    document.getElementById("projectLumina").classList.remove("selected")
    document.getElementById("projectCalcCards").classList.remove("selected")
    document.getElementById("projectValorant").classList.remove("selected")
    document.getElementById("projectPreviewLumina").classList.add("hidden")
    document.getElementById("projectPreviewCalcCards").classList.add("hidden")
    document.getElementById("projectPreviewValorant").classList.add("hidden")
    if (project == "lumina") {
        document.getElementById("projectLumina").classList.add("selected");
        // alert("did")
        // console.log(document.getElementById("projectImageLumina").classList)
        document.getElementById("projectPreviewLumina").classList.remove("hidden");
    }
    else if (project == "calcCards") {
        document.getElementById("projectCalcCards").classList.add("selected")
        document.getElementById("projectPreviewCalcCards").classList.remove("hidden")
    }
    else if (project == "valorant") {
        document.getElementById("projectValorant").classList.add("selected")
        document.getElementById("projectPreviewValorant").classList.remove("hidden")
    }

    document.getElementById("projectTitle").innerHTML = ""
    document.getElementById("projectDescription").innerHTML = ""
    // document.getElementById("projectPoints").innerHTML = ""

    const elements = document.getElementsByClassName('tool');

    for (const element of elements) {
        element.classList.add('hidden');
    }

    document.getElementById("projectTitle").innerHTML = projectsData[project].title
    document.getElementById("projectDescription").innerHTML = projectsData[project].description

    // let list = document.getElementById('projectPoints');

    // for (let bullet of projectsData[project].bullets) {
    //     let item = document.createElement('li');
    //     item.innerText = bullet;
    //     list.appendChild(item);
    // }


    let counter = 1
    let currentTool = {}
    for (let tool of projectsData[project].tools) {
        currentTool = document.getElementById(tool)
        currentTool.classList.remove("hidden")
        currentTool.style.order = counter

        counter = counter + 1

    }
}

function displayPage() {
    const page = window.localStorage.getItem("page");
    if (page == "projects") {
        displayProjects()
    }
    else {
        displayAbout()
        //handles new users aswell (no current page history)
    }
}

function onLoadApp() {
    displayPage()
    displayCurrentProject()
    updateTheme()
}

function displayAbout() {
    window.localStorage.setItem("page", "about");
    document.getElementById("about").classList.remove("hidden")
    document.getElementById("allProjectContent").classList.add("hidden")
    document.getElementById("navLinkAbout").classList.add("selected")
    document.getElementById("navLinkProjects").classList.remove("selected")
}

function displayProjects() {
    window.localStorage.setItem("page", "projects");
    document.getElementById("about").classList.add("hidden")
    document.getElementById("allProjectContent").classList.remove("hidden")
    document.getElementById("navLinkAbout").classList.remove("selected")
    document.getElementById("navLinkProjects").classList.add("selected")

    // Assuming you have a reference to the element you want to scroll to
    const element = document.getElementById("projectContent");

    // Scroll to the element
    element.scrollIntoView({ behavior: "smooth", block: "start" });

}

function updateTheme() {
    let theme = window.localStorage.getItem("theme");

    if (theme == null) {
        theme = "user";
        //default theme
    }

    if (theme == "user") {
        const darkThemeMq = window.matchMedia("(prefers-color-scheme: dark)");
        if (darkThemeMq.matches) {
            window.localStorage.setItem("theme", "dark");
            setDarkTheme()
        }
        else {
            window.localStorage.setItem("theme", "light");
            setLightTheme()
        }
    }
    else if (theme == "light") {
        setLightTheme()
    }
    else if (theme == "dark") {
        setDarkTheme()
    }
}

function toggleTheme() {
    let theme = window.localStorage.getItem("theme");

    if (theme == "light") {
        window.localStorage.setItem("theme", "dark");

    } else if (theme == "dark") {
        window.localStorage.setItem("theme", "light");
    }

    updateTheme();
}

function setLightTheme() {
    document.getElementById("themeToggleLight").classList.add("hidden")
    document.getElementById("themeToggleDark").classList.remove("hidden")
    for (const element of document.querySelectorAll('body, body *')) {
        element.classList.remove("dark")
    }
}

function setDarkTheme() {
    document.getElementById("themeToggleLight").classList.remove("hidden")
    document.getElementById("themeToggleDark").classList.add("hidden")
    for (const element of document.querySelectorAll('body, body *')) {
        element.classList.add("dark")
    }
}

function showToolTip(e, msg) {

    if (window.innerWidth <= 790) {
        return -1
    }

    keepTooltipDisplayed()

    const btnRect = e.getBoundingClientRect();
    const btnCenterX = btnRect.left + (btnRect.width / 2);
    const windowHeight = window.innerHeight;
    const windowWidth = window.innerWidth;

    const tooltip = document.getElementById("tooltip");
    tooltip.innerHTML = msg;
    tooltip.classList.remove("hidden");


    const toolTipHeight = tooltip.offsetHeight
    const elementHeight = e.offsetHeight

    if (btnRect.top < windowHeight / 2) {
        tooltip.style.top = btnRect.bottom + "px";
    }
    else {
        tooltip.style.top = btnRect.bottom - toolTipHeight - elementHeight - 20 + "px";
    }

    tooltip.style.left = btnRect.left + "px"

    const tooltipRect = e.getBoundingClientRect();

    console.log(tooltipRect.left + tooltip.offsetWidth)
    console.log(windowWidth)

    const tooltipRight = tooltipRect.left + tooltip.offsetWidth
    const difference = tooltipRight - windowWidth

    if (tooltipRight > windowWidth - 50) {
        console.log("broken", difference, tooltip.style.left)
        tooltip.style.left = tooltipRect.left - difference - 50 + "px"
        console.log("new", tooltip.style.left)
    }

}

function hideToolTip() {
    const tooltip = document.getElementById("tooltip")

    if (tooltip.style.opacity == "100" || tooltip.style.opacity == "") {
        timoutId = setTimeout(() => {
            tooltip.classList.add("hidden")
        }, 50);
    }
}


function keepTooltipDisplayed() {
    clearTimeout(timoutId)
}

function goToDemo() {
    const project = window.localStorage.getItem("project")
    let url = ""

    if (project == "lumina") {
        url = "https://ashhalsyed.github.io/AutomatedSolarBlinds/"
    }
    else if (project == "calcCards") {
        url = "https://ashhalsyed.github.io/Calc-Cards/"
    }
    else if (project == "valorant") {
        url = "https://ashhalsyed.github.io/Valorant-Guides"
    }
    window.open(url, '_blank').focus();
}

function goToCode() {
    const project = window.localStorage.getItem("project")
    let url = ""

    if (project == "lumina") {
        url = "https://github.com/ashhalsyed/AutomatedSolarBlinds"
    }
    else if (project == "calcCards") {
        url = "https://github.com/ashhalsyed/Calc-Cards"
    }
    else if (project == "valorant") {
        url = "https://github.com/ashhalsyed/Valorant-Guides"
    }
    window.open(url, '_blank').focus();
}