
// FOR RANDOM BORDER ON EACH POLLS
const articles  = document.querySelectorAll(".poll-container");
const forms     = document.querySelectorAll('.form-list input');

function randomizeBorder (a, b, c)  {
    const result =  Math.floor(Math.random() * (a - b + c )) + b;
    return result;
};

articles.forEach(article => {
    article.style.borderTopLeftRadius       = `${randomizeBorder(255, 155, 1)}px ${randomizeBorder(50, 10, 1)}px`
    article.style.borderTopRightRadius      = `${randomizeBorder(50, 10, 1)}px ${randomizeBorder(255, 155, 1)}px`
    article.style.borderBottomLeftRadius    = `${randomizeBorder(255, 155, 1)}px ${randomizeBorder(50, 10, 1)}px`
    article.style.borderBottomRightRadius   = `${randomizeBorder(50, 10, 1)}px ${randomizeBorder(255, 155, 1)}px`
});

forms.forEach(form => {
    form.style.borderTopLeftRadius       = `${randomizeBorder(255, 155, 1)}px ${randomizeBorder(50, 10, 1)}px`
    form.style.borderTopRightRadius      = `${randomizeBorder(50, 10, 1)}px ${randomizeBorder(255, 155, 1)}px`
    form.style.borderBottomLeftRadius    = `${randomizeBorder(255, 155, 1)}px ${randomizeBorder(50, 10, 1)}px`
    form.style.borderBottomRightRadius   = `${randomizeBorder(50, 10, 1)}px ${randomizeBorder(255, 155, 1)}px`
});

// FOR EVERY CHECKBOX TO BE CHECKED ONE BY ONE
const checkboxes = document.querySelectorAll('input');

    checkboxes.forEach((checkbox) => {
        checkbox.addEventListener('click', () => {
        if (checkbox.checked) {
            checkboxes.forEach((otherCheckbox) => {
            if (otherCheckbox !== checkbox) {
                otherCheckbox.checked = false;
            }
            });
        }
        });
    });

// DARK THEME
const switchDarkMode  = document.querySelector('.dark-theme-switch');

function toDarkMode (a, b) {
    document.querySelectorAll(a).forEach((element) => {
        element.classList.toggle(b);
});
};

switchDarkMode.addEventListener('click', () => {
    document.querySelector('body').classList.toggle('dark-body');
    toDarkMode('a', 'dark-a');
    toDarkMode('article', 'dark-article');
    toDarkMode('.article-button', 'dark-button');
    toDarkMode('.share-button', 'dark-img');
    toDarkMode('.form-container','dark-article')
    toDarkMode('.create-input-question', 'dark-a')
    toDarkMode('.create-input-title', 'dark-a')
    toDarkMode('.category-page', 'dark-category')
});

// CATEGOIES SCROLL BEHAVIOR
const horizontalScroll = document.querySelector('.horizontal-scroll');
horizontalScroll.addEventListener('wheel', function(event) {
  event.preventDefault()
  horizontalScroll.scrollLeft += event.deltaY;
  console.log(horizontalScroll.scrollLeft);
  console.log(event.deltaY);
});

const secondHorizontalScroll = document.querySelector('.second-horizontal-scroll');
secondHorizontalScroll.scrollLeft = 4493;
horizontalScroll.addEventListener('wheel', function(event) {
  event.preventDefault()
  secondHorizontalScroll.scrollLeft -= event.deltaY;
});

const beforeButton = document.querySelector('.before');
const afterButton  = document.querySelector('.after');

beforeButton.addEventListener('click', () => {
    horizontalScroll.scrollBy(100,0);
    secondHorizontalScroll.scrollBy(-100,0);
})

afterButton.addEventListener('click', () => {
    horizontalScroll.scrollBy(-100,0);
    secondHorizontalScroll.scrollBy(100,0);
})

// 



