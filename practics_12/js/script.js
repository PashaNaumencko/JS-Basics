const form = document.forms[0];
const resultTemp = document.querySelector(".resultTemp");
const resultSpeed = document.querySelector(".resultSpeed");
const resultCity = document.querySelector(".resultCity");

form.onsubmit = function(e)
{
    e.preventDefault();
    const city = form.elements.temp.value;
    const APIKey = "1492cad0bf0f7e4604b072415dbbe386";
    const url = "http://api.openweathermap.org/data/2.5/weather?q="+ city +"&appid=" + APIKey;

    let xhl = new XMLHttpRequest();
    xhl.open("GET", url, false);
    xhl.send();
    if(xhl.status != 200)
    {
        console.log(xhl.status + " " + xhl.statusText);
    }
    else
    {
        let DATA = JSON.parse(xhl.responseText);
        resultCity.innerHTML = DATA.name;
        resultTemp.innerHTML = DATA.main.temp - 273;
        resultSpeed.innerHTML = DATA.wind.speed;
    }
}

