'use strict'

const asidebar = document.querySelector('[data-asidebar]')
const asidebarButton = document.querySelector('.asidebar__btn')

asidebarButton.addEventListener('click', (e) => {
  asidebar.classList.toggle('asidebar--active')
  console.log(asidebar)
})
