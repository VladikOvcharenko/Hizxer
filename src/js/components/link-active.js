const links = document.querySelectorAll('.header-nav__link')
const currentPageURL = window.location.href

links.forEach((link) => {
  if (link.href === currentPageURL) {
    link.classList.add('link-active')
  }
})
