// FOR RANDOM BORDER ON EACH POLLS
const articles = document.querySelectorAll(".poll-container");
const forms = document.querySelectorAll(".form-list input");

function randomizeBorder(a, b, c) {
  const result = Math.floor(Math.random() * (a - b + c)) + b;
  return result;
}

articles.forEach((article) => {
  article.style.borderTopLeftRadius = `${randomizeBorder(
    255,
    155,
    1
  )}px ${randomizeBorder(50, 10, 1)}px`;
  article.style.borderTopRightRadius = `${randomizeBorder(
    50,
    10,
    1
  )}px ${randomizeBorder(255, 155, 1)}px`;
  article.style.borderBottomLeftRadius = `${randomizeBorder(
    255,
    155,
    1
  )}px ${randomizeBorder(50, 10, 1)}px`;
  article.style.borderBottomRightRadius = `${randomizeBorder(
    50,
    10,
    1
  )}px ${randomizeBorder(255, 155, 1)}px`;
});

forms.forEach((form) => {
  form.style.borderTopLeftRadius = `${randomizeBorder(
    255,
    155,
    1
  )}px ${randomizeBorder(50, 10, 1)}px`;
  form.style.borderTopRightRadius = `${randomizeBorder(
    50,
    10,
    1
  )}px ${randomizeBorder(255, 155, 1)}px`;
  form.style.borderBottomLeftRadius = `${randomizeBorder(
    255,
    155,
    1
  )}px ${randomizeBorder(50, 10, 1)}px`;
  form.style.borderBottomRightRadius = `${randomizeBorder(
    50,
    10,
    1
  )}px ${randomizeBorder(255, 155, 1)}px`;
});

// FOR EVERY CHECKBOX TO BE CHECKED ONE BY ONE
const checkboxes = document.querySelectorAll("input");

checkboxes.forEach((checkbox) => {
  checkbox.addEventListener("click", () => {
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
const switchDarkMode = document.querySelector(".dark-theme-switch");

function toDarkMode(selector, className) {
  document.querySelectorAll(selector).forEach((element) => {
    element.classList.toggle(className);
  });
}

const isDarkMode = localStorage.getItem("isDarkMode");

if (isDarkMode === "true") {
  activateDarkMode();
  switchDarkMode.checked = true;
}

switchDarkMode.addEventListener("click", () => {
  const isCurrentlyDarkMode = document.body.classList.contains("dark-body");

  if (isCurrentlyDarkMode) {
    desactivateDarkMode();
    localStorage.setItem("isDarkMode", "false");
    switchDarkMode.checked = false;
  } else {
    activateDarkMode();
    localStorage.setItem("isDarkMode", "true");
    switchDarkMode.checked = true;
  }
});

function activateDarkMode() {
  document.querySelector("body").classList.add("dark-body");
  toDarkMode("a", "dark-a");
  toDarkMode("article", "dark-article");
  toDarkMode(".article-button", "dark-button");
  toDarkMode(".share-button", "dark-img");
  toDarkMode(".form-container", "dark-article");
  toDarkMode(".create-input-question", "dark-a");
  toDarkMode(".create-input-title", "dark-a");
  toDarkMode(".category-page", "dark-category");
  toDarkMode(".author-poll img", "dark-img");

  localStorage.setItem("isDarkMode", "true");
}

function desactivateDarkMode() {
  document.querySelector("body").classList.remove("dark-body");
  toDarkMode("a", "dark-a");
  toDarkMode("article", "dark-article");
  toDarkMode(".article-button", "dark-button");
  toDarkMode(".share-button", "dark-img");
  toDarkMode(".form-container", "dark-article");
  toDarkMode(".create-input-question", "dark-a");
  toDarkMode(".create-input-title", "dark-a");
  toDarkMode(".category-page", "dark-category");
  localStorage.setItem("isDarkMode", "false");
}

// CATEGOIES SCROLL BEHAVIOR
const horizontalScroll = document.querySelector(".horizontal-scroll");
horizontalScroll.addEventListener("wheel", function (event) {
  event.preventDefault();
  horizontalScroll.scrollLeft += event.deltaY;
  console.log(horizontalScroll.scrollLeft);
});

const secondHorizontalScroll = document.querySelector(
  ".second-horizontal-scroll"
);
secondHorizontalScroll.scrollLeft = 4493;
horizontalScroll.addEventListener("wheel", function (event) {
  event.preventDefault();
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

// SCROLL DOWN

const testScroll = document.addEventListener('scroll', (event) => {
  console.log(window.scrollY);
})


console.log('Valorant c de la merde');

