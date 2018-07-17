let person = 
{
    name: "Pasha",
    surname: "Naumenko",
    age: 19,
    student: true,
    sayHello: function()
    {
        return "Hello " + this.name;
    }
}

console.log(person.name);
console.log(person.sayHello());

person.canCode = true;
console.log(person);

person.age = 20;

console.log(person);
console.log(person["surname"]);