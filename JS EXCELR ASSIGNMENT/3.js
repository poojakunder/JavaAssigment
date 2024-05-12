function fun1() {
    console.log("Hello, Alice (Function Declaration)");
  }
fun1();

const fun2 = function() {
    console.log("Hello, Bob (Function Expression)");
  };
fun2();

fun3 = () => {
    console.log("Hello, Charlie (Arrow Function)");
  }
fun3();

function fun4(first) {
    this.firstName = first;
}
const set = new fun4("Hello, Dave (Function Constructor)");
console.log(set.firstName);

(function (){ 
    console.log("Hello, Eve (IIFE)");
})();

function* fun5() {
   yield "Hello, World (Generator Function)"
   //yield "Hello, World1 (Generator Function)"
}
const gen = fun5();
console.log(gen.next().value);
//console.log(gen.next().value);

function fun6() {
    return "Hey, Frank (Returned Function)" ;
}
console.log(fun6());

const person = {
    firstName: "Hello, ",
    lastName: "Grace ",
    id: "(Object Method)",
    fullName: function() {
      return this.firstName + this.lastName + this.id;
    }
  };
console.log(person.fullName())


