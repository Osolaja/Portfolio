function toggleMenu(){
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");

    menu.classList.toggle("open");
    icon.classList.toggle("open");
}


document.querySelector('#about').scrollIntoView({
    behavior: 'smooth'
})

document.querySelector('#experience').scrollIntoView({
    behavior: 'smooth'
})

document.querySelector('#contact').scrollIntoView({
    behavior: 'smooth'
})