request = document.querySelector(".request");
popup = document.querySelector(".popup");
closePopup = document.querySelector(".closePopup");
menu = document.querySelector(".menu");
openMenu = document.querySelector(".fas.fa-bars.openMenu");
closeMenu = document.querySelector(".closeMenu");

request.addEventListener("click", function()
{
    popup.style.display = "flex";
});
closePopup.addEventListener("click", function()
{
    popup.style.display = "none";
});
openMenu.addEventListener("click", function()
{
    menu.style.left = 0;
});
closeMenu.addEventListener("click", function()
{
    menu.style.left = "-50vw";
});