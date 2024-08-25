const toggleBtn = document.querySelectorAll('.toggle-btn') //each task toggle button
const openSideBarBtn = document.getElementById('open-btn') //sidebar open button
const closeSideBarBtn = document.getElementById('close-btn') //sidebar close button 
const sideBar = document.querySelector('.main-sidebar') //sidebar element
const sideBarList = document.querySelector('.sidebar-list') //sidebar content

toggleBtn.forEach(btn => {
    btn.addEventListener('click', (e) => {
        const closedContainer = e.currentTarget.previousElementSibling
        closedContainer.classList.toggle('show')
    })
})

// open sidebar
openSideBarBtn.addEventListener('click', (e) => {
    sideBar.classList.add('show-sidebar')
    e.currentTarget.style.display = 'none'
    closeSideBarBtn.style.cursor = 'pointer'
    closeSideBarBtn.title ='Close button'
    sideBarList.style.display = 'block'
})

closeSideBarBtn.addEventListener('click', (e) => {
    sideBar.classList.remove('show-sidebar')
    openSideBarBtn.style.display= 'block'
    e.currentTarget.style.cursor = 'unset'
    sideBarList.style.display = 'none'
})

