/*
  In this section we are going to learn some more advanced data types.
  The first is called an array in javascript, it may have another name in other languages.

  An array is a list of values seperated by commas wrapped in square brackets.
  LINK

  So there are two ways to create an array. Try using them both in this section. You can look into constructor functions on your own, they are outside of the scope of this class.

  We are going to be using array literal syntax, which goes like so:
  var b = ['list', 'of', 'vaules']; 

  
*/

// Use the space below to create a couple of arrays, and make sure to assign them to the variables that the tests are looking for! Give them as many or as few values as you'd like for this one.



/*

  So what if we want to access a specific value in the array?
  That brings us to the next cool thing about arrays (and there are a lot of them!). This is actually a similarity they share with strings.

  Arrays (and strings) are numerically indexed, starting at 0.
  That's confusing!
  Well hold on, let's look at it in more detail.

  Numerically means we use numbers.
  Indexed means that the values have a numerical 'pointer' associated with them.

  Indexing starts at 0 in javascript, (in computer science in general we start counting with 0).

  Still confused? That's alright, there's an example below to help you.
*/
// Indexes are :  0 ,  1,   2,   3,   4,   5,   6,   7
var testArray = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];

//Same with strings!
var testString = 'this is a string';
// Indexes are :  0123456789 etc.

/*
  So what if we want to access a specific value in the array or a string?
  We use what we call bracket notation, like so:

  testArray[0];

  We can also over-write values in an array, or assign new values extending the array (or string) using bracket notation!
*/

// For this next section, access the values from testString and testArray and assign them to the variables described in the tests.


var val1;
var val2;
var val3;
var val4;
var val5;
var val6;
var val7;


/*
  In this next section, we are going to talk about one of the most important types in JS.
  Objects.

  DEFINITION
  LINK

  An object is a collection of key value pairs wrapped in curly braces. 
  (They go by other names in other languages.)
  Let's see an example

  var obj = {
    first: 1,
    second: 2,
    third: 3,
    aString: 'this is a string in an object',
    aBoolean: true,
    anotherBoolean: false,
    thisOneIsNull: null,
    thisIsUndefined: undefined,
    anArray: ['a', 'b', 3, 5, true, null],
    aFunc: function() {
      return 'this is a method on the obj object';
    }
  };

  There is a lot going on in our object, yeah?
  Notice that the key is on the left side of the colon, and the value is on the right side.
  If there is more than one key/value pair, they are seperated by commas.
  Notice that the last value doesn't have a comma trailing it, as there isn't another following pair!
  Any data type can be held in an object (or an array, for that matter!).
*/

// For this first section on objects, assign a variable called myObj an object.
// Give myObj the following keys:
// myName with a value of a string with your name
// myCity with a value of a string with your city
// myAge with a value of your age
//myTruth with a boolean (do you like js so far?)
// myMusic with a value of an array that has your four favorite bands as values.









