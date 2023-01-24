//1.Create a Person constructor that has three properties: name, job, and age.
//2.Give the Person an 'exercise' method that console logs whatever you want, e.g. "Running is fun! - said no one ever".
//3.Give the Person a 'fetchJob' method that console logs the person's name and job, e.g. "Brad is a back-end developer".
//4.Create a Programmer constructor that inherits all the members from Person with an additional 'languages' property that is passed in and a busy property that is NOT passed 
//in and is set to true by default.
//5.Give the Programmer a 'completeTask' method that updates the busy property on that programmer to be false. Also give the Programmer an 'acceptNewTask' method that updates 
//the busy property on that programmer to be true.
//6.Give the Programmer an 'offerNewTask' method that console logs one thing if the programmer is busy and another if the programmer is not, e.g. should initially log out 
//"Mark can't accept any new tasks right now." and "Mark would love to take on a new responsibility." if the programmer is not busy.
//7.Give the Programmer 'learnLanguage' and 'listLanguages' methods that add new languages to the programmer and list off all languages the programmer knows.
//8.Test it out - can you create different programmers and run all the methods on them? Does each programmer maintain their own properties properly and independently of the
//other programmers? Bonus - ES6 Syntax: Use ES6 Syntax in your answer. Feel free to add on new methods or properties to incorporate the syntax.

class Person{
    constructor(name, job, age) {
        this.name = name;
        this.job = job;
        this.age = age;
    }
    exercise(){
        console.log("Running is fun! - said no one ever");
    }
    fetchJob(){
        console.log(`${this.name} is a ${this.job}`);
    }
}
class Programmer extends Person {
    constructor(name, job, age, languages) {
        super(name, job, age);
        this.languages = languages;
        this.busy = true;
    }
    completeTask() {
        this.busy = false;
    }
    acceptNewTask() {
        this.busy = true;
    }
    offerNewTask() {
        console.log(this.busy ? `${this.name} can't accept any new tasks right now.` : `${this.name} would love to take on a new responsibility.`);
    }
    learnLanguage(language) {
        this.languages.push(language);
    }
    listLanguages() {
        return this.languages;
    }
}




const person1 = new Person("Harold", "Backend Engineer", 20);
const programmer1 = new Programmer("Liana", "DevOps", 35, ["HTML", "C#", "LUA"]);
const programmer2 = new Programmer("Edwin", "janitor", 55, ["HTML", "SASS”, ”Ruby"]);
const programmer3 = new Programmer("Emmanuella", "SysOps", 31,    [("HTML", "CSS", "JS", "R")]);
programmer1.learnLanguage("CSS");
programmer2.learnLanguage("C++");
programmer3.learnLanguage("JAVA");
console.log(programmer1.listLanguages());
console.log(programmer2.listLanguages());
console.log(programmer3.listLanguages());
console.log(person1);
console.log(programmer1);
console.log(programmer2);
console.log(programmer3);

person1.exercise();
person1.fetchJob();