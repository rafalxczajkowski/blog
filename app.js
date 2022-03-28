//Change active button and active section
const sectBtn = document.querySelectorAll('.control')

for (let i = 0; i < sectBtn.length; i++) {
    sectBtn[i].addEventListener('click', () => {
        document.querySelector('.active-btn').classList.remove('active-btn')
        sectBtn[i].className += ' active-btn'
        let id = sectBtn[i].dataset.id
        document.querySelector('.active').classList.remove('active')
        document.getElementById(id).classList.add('active')
    })
}

//Toggle theme
const html = document.querySelector('html')
html.dataset.theme = 'dark'
const themeBtn = document.querySelector('.theme-btn')
themeBtn.addEventListener('click', () => {
    if (html.dataset.theme == 'dark') {
        html.dataset.theme = 'light'
    } else {
        html.dataset.theme = 'dark'
    }
})