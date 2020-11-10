//logical operator//

alert( null || 2 || undefined );
 
//answer: 2 //

alert( alert(1) || 2 || alert(3) );

// answer 1, 2 

alert( 1 && null && 2 );

// answer null

alert( alert(1) && alert(2) );

//answer 1 , undefined 

alert( null || 2 && 3 || 4 );

//answer 3

if (age >= 14 && age <= 90)

//

if (!(age >= 14 && age <= 90))

if (age < 14 || age > 90)

//

if (-1 || 0) alert( 'first' )

if (-1 && 0) alert( 'second' );

if (null || -1 && 1) alert( 'third' );

//


let userName = prompt("Who's there?", '');

if (userName === 'Admin') {

  let pass = prompt('Password?', '');

  if (pass === 'TheMaster') {
    alert( 'Welcome!' );
  } else if (pass === '' || pass === null) {
    alert( 'Canceled' );
  } else {
    alert( 'Wrong password' );
  }

} else if (userName === '' || userName === null) {
  alert( 'Canceled' );
} else {
  alert( "I don't know you" );

//End of logical operatior//

//LOOPS//

let i = 3;

while (i) {
  alert( i-- );
}

//answer 1 

//1-4
let i = 0;
while (++i < 5) alert( i );

//1-5

let i = 0;
while (i++ < 5) alert( i );

//

//0-4

for (let i = 0; i < 5; ++i) alert( i );

for (let i = 0; i < 5; i++) alert( i );

//

for (let i = 2; i <= 10; i++) {
    if (i % 2 == 0) {
      alert( i );
    }
  }

  //

  let i = 0;
while (i < 3) {
  alert( `number ${i}!` );
  i++;
}

//

let num;

do {
  num = prompt("Enter a number greater than 100?", 0);
} while (num <= 100 && num);

//

For each i in the interval {
    check if i has a divisor from 1..i
    if yes => the value is not a prime
    if no => the value is a prime, show it
  }


  let n = 10;

nextPrime:
for (let i = 2; i <= n; i++) { // for each i...

  for (let j = 2; j < i; j++) { // look for a divisor..
    if (i % j == 0) continue nextPrime; // not a prime, go next i
  }

  alert( i ); // a prime
}

//end of loop//

//

if(browser == 'Edge') {
    alert("You've got the Edge!");
  } else if (browser == 'Chrome'
   || browser == 'Firefox'
   || browser == 'Safari'
   || browser == 'Opera') {
    alert( 'Okay we support these browsers too' );
  } else {
    alert( 'We hope that this page looks ok!' );
  }

  // SWITCH

  let a = +prompt('a?', '');

switch (a) {
  case 0:
    alert( 0 );
    break;

  case 1:
    alert( 1 );
    break;

  case 2:
  case 3:
    alert( '2,3' );
    break;
}

// End of switch

// FUNCTION

No difference 

//

function checkAge(age) {
    return (age > 18) || confirm('Did parents allow you?');
  }

  //

  function min(a, b) {
    if (a < b) {
      return a;
    } else {
      return b;
    }
  }

  //

  function pow(x, n) {
    let result = x;
  
    for (let i = 1; i < n; i++) {
      result *= x;
    }
  
    return result;
  }
  
  let x = prompt("x?", '');
  let n = prompt("n?", '');
  
  if (n < 1) {
    alert(`Power ${n} is not supported, use a positive integer`);
  } else {
    alert( pow(x, n) );
  }

  //end of functions

  // arrow function basic 

  function ask(question, yes, no) {
    if (confirm(question)) yes()
    else no();
  }
  
  ask(
    "Do you agree?",
    () => alert("You agreed."),
    () => alert("You canceled the execution.")
  );

  //end 

 // 4.1 - 4.5
 //
 let user = {};
user.name = "John";
user.surname = "Smith";
user.name = "Pete";
delete user.name;
//

function isEmpty(obj) {
  for (let key in obj) {
    // if the loop has started, there is a property
    return false;
  }
  return true;
}

//

let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
};

let sum = 0;
for (let key in salaries) {
  sum += salaries[key];
}

alert(sum); // 390

//
function multiplyNumeric(obj) {
  for (let key in obj) {
    if (typeof obj[key] == 'number') {
      obj[key] *= 2;
    }
  }
}

//

function makeUser() {
  return {
    name: "John",
    ref: this
  };
}

let user = makeUser();

alert( user.ref.name ); // Error: Cannot read property 'name' of undefined

//

let calculator = {
  sum() {
    return this.a + this.b;
  },

  mul() {
    return this.a * this.b;
  },

  read() {
    this.a = +prompt('a?', 0);
    this.b = +prompt('b?', 0);
  }
};

calculator.read();
alert( calculator.sum() );
alert( calculator.mul() );

//
let ladder = {
  step: 0,
  up() {
    this.step++;
    return this;
  },
  down() {
    this.step--;
    return this;
  },
  showStep() {
    alert( this.step );
    return this;
  }
}

ladder.up().up().down().up().down().showStep(); // 1

//

let obj = {};

function A() { return obj; }
function B() { return obj; }

alert( new A() == new B() ); // true

//

function Calculator() {

  this.read = function() {
    this.a = +prompt('a?', 0);
    this.b = +prompt('b?', 0);
  };

  this.sum = function() {
    return this.a + this.b;
  };

  this.mul = function() {
    return this.a * this.b;
  };
}

let calculator = new Calculator();
calculator.read();

alert( "Sum=" + calculator.sum() );
alert( "Mul=" + calculator.mul() );

//

function Accumulator(startingValue) {
  this.value = startingValue;

  this.read = function() {
    this.value += +prompt('How much to add?', 0);
  };

}

let accumulator = new Accumulator(1);
accumulator.read();
accumulator.read();
alert(accumulator.value);

// 

