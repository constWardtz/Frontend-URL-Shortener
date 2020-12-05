const toggleNavbar = document.querySelector(`#toggle-navbar`)
const navbarMobile = document.querySelector(`#navbar-mobile`)

const burgerBtn = 'fa-bars'
const closeBtn = 'fa-close'


toggleNavbar.addEventListener(`click`, () => {
    if (toggleNavbar.classList.contains(burgerBtn)) {
        toggleNavbar.classList.remove(burgerBtn)
        toggleNavbar.classList.add(closeBtn)

        navbarMobile.style = `
            display: grid;
        `
    } else if (toggleNavbar.classList.contains(closeBtn)) {
        toggleNavbar.classList.add(burgerBtn)
        toggleNavbar.classList.remove(closeBtn)

        navbarMobile.style = `
            display: none;
        `
   }
})