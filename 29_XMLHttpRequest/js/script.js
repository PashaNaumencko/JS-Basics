const APIKey = "1492cad0bf0f7e4604b072415dbbe386";
const city = "Miami";
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
    let DATA =  JSON.parse(xhl.responseText);
    console.log(DATA);
    document.write(DATA.main.temp - 273);
}
