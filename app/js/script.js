const openIcon = document.querySelector('#openIcon')
const closeIcon = document.querySelector('#closeIcon')
const togglers = document.querySelectorAll('.toggler')
const body = document.querySelector('body')
const nav = document.querySelector('.mobile-nav')

let navActive = false;

togglers.forEach(toggleBtn => {

    toggleBtn.addEventListener('click', () => {
        nav.classList.remove('slide-out')
        if (!navActive) {
            openIcon.classList.add('hide')
            closeIcon.classList.remove('hide')
            nav.classList.add('slide-in')
            body.classList.add('overflow-hide')
            navActive = !navActive
        } else if(navActive) {
            openIcon.classList.remove('hide')
            closeIcon.classList.add('hide')
            nav.classList.remove('slide-in')
            nav.classList.add('slide-out')
            body.classList.remove('overflow-hide')
            navActive = !navActive
        }

    })
})

