const toggleNavbar = document.querySelector(`#toggle-navbar`)
const navbarMobile = document.querySelector(`#navbar-mobile`)

toggleNavbar.addEventListener(`click`, () => {
    if (toggleNavbar.classList.contains('fa-bars')) {
        toggleNavbar.classList.remove('fa-bars')
        toggleNavbar.classList.add('fa-close')

        navbarMobile.style = `
            display: grid;
        `
    } else if (toggleNavbar.classList.contains('fa-close')) {
        toggleNavbar.classList.add('fa-bars')
        toggleNavbar.classList.remove('fa-close')

        navbarMobile.style = `
            display: none;
        `
   }
})