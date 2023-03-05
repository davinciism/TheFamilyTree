//NAVBAR

const navbar = document.querySelector("nav");
const header = document.querySelector("header");
const logoImg = document.querySelector(".logo-img")

const headerOptions = {
    rootMargin: "-100px 0px 0px 0px"
};

const headerObserver = new IntersectionObserver(function(
    entries,
    headerObserver
){
    entries.forEach(entry => {
        //console.log(entry.target)
        if(!entry.isIntersecting){
            navbar.classList.add("navbar-scrolled")
            logoImg.src = "/assets/logo.png";
        } else {
            navbar.classList.remove("navbar-scrolled")
            logoImg.src = "/assets/logo-white.png";
        }
    });
}, 
headerOptions);

headerObserver.observe(header);




//TEAM

//Nupur
const nupurShortText = document.querySelector(".nupur-short-text")
const nupurtFullText = document.querySelector(".nupur-full-text")
const nupurBtn = document.querySelector(".nupur-btn")
    
nupurBtn.addEventListener('click', () => {
    if (nupurShortText.style.display == 'block'){
        nupurShortText.style.display = 'none'
        nupurtFullText.style.display = 'block'
        nupurBtn.innerHTML = "Read Less"
    }
    else{
        nupurShortText.style.display = 'block'
        nupurtFullText.style.display = 'none'
        nupurBtn.innerHTML = "Read More"
    }
})

//Neha
const nehaShortText = document.querySelector(".neha-short-text")
const nehaFullText = document.querySelector(".neha-full-text")
const nehaBtn = document.querySelector(".neha-btn")

nehaBtn.addEventListener('click', () => {
    if (nehaShortText.style.display == 'block'){
        nehaShortText.style.display = 'none'
        nehaFullText.style.display = 'block'
        nehaBtn.innerHTML = "Read Less"
    }
    else{
        nehaShortText.style.display = 'block'
        nehaFullText.style.display = 'none'
        nehaBtn.innerHTML = "Read More"
    }
})

//Ambika
const ambikaShortText = document.querySelector(".ambika-short-text")
const ambikaFullText = document.querySelector(".ambika-full-text")
const ambikaBtn = document.querySelector(".ambika-btn")

ambikaBtn.addEventListener('click', () => {
    if (ambikaShortText.style.display == 'block'){
        ambikaShortText.style.display = 'none'
        ambikaFullText.style.display = 'block'
        ambikaBtn.innerHTML = "Read Less"
    }
    else{
        ambikaShortText.style.display = 'block'
        ambikaFullText.style.display = 'none'
        ambikaBtn.innerHTML = "Read More"
    }
})

//Shweta
const shwetaShortText = document.querySelector(".shweta-short-text")
const shwetaFullText = document.querySelector(".shweta-full-text")
const shwetaBtn = document.querySelector(".shweta-btn")

shwetaBtn.addEventListener('click', () => {
    if (shwetaShortText.style.display == 'block'){
        shwetaShortText.style.display = 'none'
        shwetaFullText.style.display = 'block'
        shwetaBtn.innerHTML = "Read Less"
    }
    else{
        shwetaShortText.style.display = 'block'
        shwetaFullText.style.display = 'none'
        shwetaBtn.innerHTML = "Read More"
    }
})



