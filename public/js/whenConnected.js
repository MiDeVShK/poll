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

