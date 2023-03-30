// POP UP PAGE
function popUp(a, b) {
    a.addEventListener('click', () => {
        b.classList.toggle('form-container_show')
        window.scrollTo({
            top: 0,
            behavior: "smooth"});
    })
};
// OPEN AND CLOSE SIGN UP PAGE
popUp(document.querySelector('.navbar-sign'), document.querySelector('.signup-container'));
popUp(document.querySelector('.signup-close') ,document.querySelector('.signup-container'));
// OPEN AND CLOSE CONNECT PAGE
popUp(document.querySelector('.navbar-connect'), document.querySelector('.connect-container'));
popUp(document.querySelector('.connect-close') ,document.querySelector('.connect-container'));
// OPEN AND CLOSE CREATE PAGE
const buttonCreate = document.querySelectorAll('.create-button');
const createContainer = document.querySelector('.create-container');
const closeButton = document.querySelectorAll('.create-close');

buttonCreate.forEach((element) => {
    element.addEventListener('click', () => {
                createContainer.classList.toggle('form-container_show')
                window.scrollTo({
                    top: 0,
                    behavior: "smooth"});
            })
})

closeButton.forEach((element) => {
    element.addEventListener('click', () => {
        createContainer.classList.toggle('form-container_show')
    })
})

