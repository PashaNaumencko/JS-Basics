const backColor = document.querySelector("body");
backColor.style.backgroundColor = prompt("Какой будет фон у страницы?");

const textColor = document.querySelector(".page");
textColor.style.color = prompt("Какой будет цвет текста на странице?");

const personName = document.querySelector("span");
personName.innerHTML = prompt("Как зовут человека, который вас вдохновляет?");

const imageUrl = document.querySelector("img");
imageUrl.setAttribute("src", prompt("Введите адрес картинки"));

const textContext = document.querySelector(".shortBio");
textContext.innerHTML = prompt("Введите текст страницы");

textContext.className += " animated";