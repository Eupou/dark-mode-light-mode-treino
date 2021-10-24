const BTN_REPLACE = document.querySelector('.btn-main')

let titleMain = document.querySelector('.titulo-main')

BTN_REPLACE.addEventListener('click', toggleAll)

function toggleAll() { 
    let darkElement = document.querySelectorAll('.dark')
    let darkBackgroundElement = document.querySelectorAll('.dark-background')
    let lightElement = document.querySelectorAll('.light')
    let lightBackgroundElement = document.querySelectorAll('.light-background')
    let btnReplace = document.querySelector('.btn-main p')

    darkElement.forEach(element => element.classList.replace('dark', 'light'));
    darkBackgroundElement.forEach(element => element.classList.replace('dark-background', 'light-background'));
    lightElement.forEach(element => element.classList.replace('light', 'dark'));
    lightBackgroundElement.forEach(element => element.classList.replace('light-background', 'dark-background'));

    if (titleMain.outerText == 'Light Mode ON') {
        titleMain.innerHTML = 'Dark Mode ON'
        btnReplace.innerHTML = 'Light mode'
    } else {
        titleMain.innerHTML = 'Light Mode ON'
        btnReplace.innerHTML = 'Dark mode'
    }
}