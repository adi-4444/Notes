const toggle = document.querySelector(".hamburger-menu")
const navContent = document.querySelector(".content")

toggle.addEventListener('click', () => {
   navContent.classList.toggle('active')
})