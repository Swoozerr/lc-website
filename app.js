const menu = document.querySelector('#mobile-menu')
const menuLinks = document.querySelector('.navbar__menu')
const projectButton = document.querySelector('#projects-link');
const experienceButton = document.querySelector('#experience-link');
const projectSection = document.querySelector('.projects');
const experienceSection = document.querySelector('.jobs');

const headerHeight = document.querySelector('.navbar').offsetHeight; // Get the height of the header

document.addEventListener('DOMContentLoaded', function() { /* make sure HTML finished loading */
    /* for mobile menu */
    menu.addEventListener('click', function() {
        menu.classList.toggle('is-active')
        menuLinks.classList.toggle('active')
    })

    /* for project jump */
    projectButton.addEventListener('click', function() {
        projectSection.scrollIntoView({ behavior: 'smooth' })
    })

    /* for experience jump */
    experienceButton.addEventListener('click', function() {
        experienceSection.scrollIntoView({ behavior: 'smooth' })
    })

    /* scroll navbar out of view */
    let lastScrollTop = 0

    window.addEventListener('scroll', function() {
        const currentScrollTop = window.scrollY

        if (currentScrollTop > lastScrollTop) {
            // scrolling down
            document.querySelector('.navbar').classList.add('scroll-down')
            document.querySelector('.navbar').classList.remove('scroll-up')
        } 
        else {
            // scrolling up
            document.querySelector('.navbar').classList.add('scroll-up')
            document.querySelector('.navbar').classList.remove('scroll-down')
        }

        lastScrollTop = currentScrollTop;
    })
})
