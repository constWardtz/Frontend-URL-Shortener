const toggleNavbar = document.querySelector(`#toggle-navbar`);
const navbarMobile = document.querySelector(`#navbar-mobile`);
const shortUrl = document.querySelector(`#shortUrl`);
const urlField = document.querySelector(`#urlField`).value;

const burgerBtn = "fa-bars";
const closeBtn = "fa-close";

/* Navbar */
toggleNavbar.addEventListener(`click`, () => {
  if (toggleNavbar.classList.contains(burgerBtn)) {
    toggleNavbar.classList.remove(burgerBtn);
    toggleNavbar.classList.add(closeBtn);

    navbarMobile.style = `
            display: grid;
        `;
  } else if (toggleNavbar.classList.contains(closeBtn)) {
    toggleNavbar.classList.add(burgerBtn);
    toggleNavbar.classList.remove(closeBtn);

    navbarMobile.style = `
            display: none;
        `;
  }
});
