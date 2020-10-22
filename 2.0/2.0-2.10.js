//variable//

let admin, name;

name = "John";

admin = name;

alert( admin )

////////////////////////

let ourPlanetName = "Earth"; 

let currentUserName = "Ashish";

////////////////////////

//dataTypes//

let name = "Ilya";

// the expression is a number 1
alert( `hello ${1}` ); // hello 1

// the expression is a string "name"
alert( `hello ${"name"}` ); // hello name

// the expression is a variable, embed it
alert( `hello ${name}` ); // hello Ilya

///////////////////////////////////




//////////////////////////////////

//2.9 comparison //

5 > 4 → true
"apple" > "pineapple" → false
"2" > "12" → true
undefined == null → true
undefined === null → false
null == "\n0\n" → false
null === +"\n0\n" → false

//////////////////////////////////

//2.10 conditional branching //

if ("0") {
    alert( 'Hello' );
  }

  /////

  let value = prompt('Type a number', 0);

if (value > 0) {
  alert( 1 );
} else if (value < 0) {
  alert( -1 );
} else {
  alert( 0 );
}

//////

let result;

if (a + b < 4) {
  result = 'Below';
} else {
  result = 'Over';
}
//////

let message = (login == 'Employee') ? 'Hello' :
  (login == 'Director') ? 'Greetings' :
  (login == '') ? 'No login' :
  '';
  ////