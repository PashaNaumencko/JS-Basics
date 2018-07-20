window.onload = function()
{
    const personName = document.querySelector(".personName");
    const icon = document.querySelector(".icon");
    const form = document.forms[0];
    const APIKey = "1492cad0bf0f7e4604b072415dbbe386";
    const city = "Kiev";
    const url = "http://api.openweathermap.org/data/2.5/weather?q="+ city +"&appid=" + APIKey;

    class Person
    {
        constructor(name)
        {
            this.name = name;
            this.happiness = 0;
        }
        hasCat()
        {
            this.happiness++;
        }
        hasRest()
        {
            this.happiness++;
        }
        hasMoney()
        {
            this.happiness++;
        }
        isSunny()
        {
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
                if(DATA.main.temp - 273 > 15)
                {
                    return this.happiness++
                }
                return this.happiness;
            }
        }
    }

    form.onsubmit = function(e)
    {
        e.preventDefault();
        let name = form.elements.name.value;
        let cat = form.elements.cat.value;
        let rest = form.elements.rest.value;
        let money = form.elements.money.value;

        const person = new Person(name);

        if(cat == "yes")
        {
            person.hasCat()
        }
        if (rest == "yes")
        {
            person.hasRest()
        }
        if (money == "yes")
        {
            person.hasMoney();
        }

        person.isSunny();
        personName.innerHTML = person.name + ":";

        switch(person.happiness)
        {
            case 4:
                icon.innerHTML = "😁";
                break;
            case 3:
            case 2:
                icon.innerHTML = "😐";
                break;
            default:
                icon.innerHTML = "☹️";
                break;
        }
    }
};

