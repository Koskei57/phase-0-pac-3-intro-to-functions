// Follow along with the examples here
/*function doNothing() {}

function sayHello() {
    console.log("Hello!");
}

function sayHelloToGuadalupe() {
    console.log("Hello, Guadalupe!");
}

function sayHelloToLiz() {
    console.log("Hello, Liz!");
}

function sayHelloToSamip() {
    console.log("Hello, Samip!");
}
sayHello();
sayHelloToGuadalupe();
sayHelloToLiz();
sayHelloToSamip();

function sayHelloTo(firstName) {
    console.log(`Hello, ${firstName}!`);
}

sayHelloTo("Guadalupe");
sayHelloTo("Jane");
sayHelloTo("R2-D2");
sayHelloTo(1);

function say(greeting, firstName) {
    console.log(`${greeting}, ${firstName}!`);
}*/

//order of arguments
function say(firstName, greeting) {
    console.log("firstName: ", firstName);
    console.log("greeting: ", greeting);
    console.log(`${greeting}, ${firstName}!`);
}
say("Julio", "hello");

function say(greeting, firstName) {

    console.log("I was called!");
    console.log(say("Howdy", "partner"));
    return `${greeting}, ${firstName}!`;
}