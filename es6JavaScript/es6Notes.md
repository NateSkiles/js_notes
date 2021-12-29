## Notes On ES6 Features

### Const vs. Let (See ya later var)
#### Const:
* ```const``` is block-scoped, much like variables declared using the ```let``` keyword. 
* Can **_NOT_** be _reassigned_ or _redeclared_
* If a constant is an _object_ or _array_, its properties or items **_can_** be updated or removed.
#### Let:
* ```let```  is block-scoped local variables, initializing it to a valve is _optional_.
    * ```var``` declares a variable globally, or locally to an entire function _regardless_ of block-scope.
* _Note:_ Many issues with ```let``` can be avoided by declaring them at the top of the scope in which they are used (doing so may impact readability).

### Template Strings
#### Template string/string interpolation syntax
Instead of traditional string concatenation, back ticks ``` `foo ${bar}` ``` are used to interpolate variables or even functions into strings.

```javascript
// Returns current year + 1
function getMessageES6() {

    return `The year is ${new Date().getFullYear() + 1}`;
}
```
<br>

### Arrow Functions
#### How to write fat arrow functions -
**Drop** the ```function``` keyword while using arrow functions:
```javascript
const add = (a, b) => {
    return a + b;
}
```
You can also **drop** the _curly brackets_ and ```return``` keyword to create a single line function
```javascript
const add = (a, b) => a + b;
```
* Only use on functions you can fit onto _one line_ without affecting the readability.

If you are only passing _one parameter_ you can **drop** the parentheses completely.
```javascript
const double = number => 2 * number;
```

* If you have _no parameter_, you must use empty parenthesis 

```javascript
const foo = () => true
```

#### When to you fat arrow functions - 
Arrow functions take advantage of **_Lexical This_**.
* Lexical: The placement of a term depends on how it is interpreted.
* ```this.``` is the context around the fat arrow function.
    * _The scope around it_.

Binds the value of ```this.``` to the surrounding context. Making the behavior of ```this.``` how it is _expected_ to be.

<br>

### Enhanced Object Literals
#### One of the most popular patterns for creating objects
ES6 makes the object literal more succinct and powerful by extending the syntax in some ways.

```javascript
// Before
function createFooBar(foo, bar) {
    return {
        foo: foo,
        bar: bar
    };
}

// After
function createFooBar(foo, bar) {
    return {
        foo,
        bar
    };
}
```

Eliminate the duplication when a _property_ of an object is the _same_ as the local variable name by including the name _without_ a colon and value.

Internally, when a property of an object literal _only_ has a name, the JavaScript engine searches for a variable with the _same_ name in the surrounding scope.

If the JavaScript engine _cant_ find one, it assigns the property the value of the variable.

#### Default Parameters
In JavaScript, a parameter has a _default_ value of ```undefined```.

Meaning that if you **don’t** pass the arguments into the function, its parameters _will_ have the default values of ```undefined```

```javascript
// Before
function sum(a, b) {
    if (a === undefined) {
        a = 0;
    }

    if (b === undefined) {
        b = 0;
    }

    return a + b;
}

// After
function sum(a = 0, b = 0) {
    return a + b;
}
```

#### Rest & Spread
The rest operator ```...``` puts **_the rest_** of some specific user-supplied values into a JavaScript array.

Spread syntax **_expands iterables_** into individual elements.

The **rest operator** is used to put the rest of some specific user-supplied values into a JavaScript array.


The text after the rest operator _references_ the values you wish to encase inside an array. 

You can **_ONLY_** use it before the _last_ parameter in a function definition.

_Note:_ For best examples reference [restAndSpread.js](./js_files/restAndSpread.js) && [restAndSpread_exer.js](./js_files/restAndSpread_exer.js)

<br>

### Deconstructing Assignments
#### Declaring variables using deconstructed objects
Used to unpack values from arrays, or properties from objects, into distinct variables.

When declaring a variable you can deconstruct the object's _properties_ allowing for cleaner code. 

This can be done when the name of the variable  being declared is the **same** as the name of the property that is being referenced.

```javascript
let expense = {
    type: 'meal',
    amount: 50.00
};
const { type, amount } = expense;
```

If you try to declare using a property that _doesn't_ exist, returns ```undefined```.

#### Pulling properties off objects that are passed to functions
When passing an object as the _argument_ of a function, use deconstruction to pull _properties_ of that object.
```javascript
function fileSummary(file) {
    return `The file ${file.name}.${file.extension} has a size of ${file.size}`
};
```
**_Note_**: If you know the names of the _properties_ being pulled off an _object_ are going to be the **same** as the names declared on the object, use curly brackets ```{ }``` to  pass the _attributes_ themselves. Saving you the trouble of referencing the object the property belongs.

> ``` object.property ``` **_VS_** ```property```

[Example](./js_files/deconstructing_cont.js)


#### Deconstructing Arrays
When you are going to call an _element_ of an _array_, you can deconstruct the array to pull out a **specific** element.

Additionally, use the **rest** operator to access the _rest_ of any element of an array.

```javascript
const [ name1, name2, ...rest ] = companies
```
[Example](./js_files/deconstructing_arrays.js)

#### Deconstructing Arrays and Objects

![Por que no los dos](https://media.giphy.com/media/3o85xIO33l7RlmLR4I/giphy.gif)

You can deconstructing to access properties off _objects_ **nested** in an _array_. 

The deconstructing always reads **_outside in_**.

```const [{ location }] = companies;```

Would read the _location_ property off of the '_company_' object in the _companies_ array and write it to the ```const``` _location_.

You can also deconstruct an _object_ with an _array_ as the _key's value_.


```javascript
const myLocation = {
    locations: ['Home', 'Grocery Store', 'Coffee Shop']
};

const { locations: [ currentLocation ] } = myLocation;
```
The code above is looks in the object _myLocation_ and searches for the property _locations_ - if it **exists**, return the _first element_ of the array. In this case returning ```'Home'```.

[Example](./js_files/deconstructing_losDos.js)


#### [Convert array of array into an array of objects](./js_files/deconstructing_exer2.js)
#### [BOSS FIGHT](./js_files/deconstructing_BOSSFIGHT.js)

<br>

## Classes
Classes are a template for creating objects.

Classes in JS are built on prototypes but also have some syntax and semantics that are not shared wit ES% class-like semantics

Classes are _"special functions"_, and have two component:
* [Class Declaration](#class-declaration)
* [Class Expressions](#class-expressions)

### Class Declaration
One way to define a class is using _class declaration_. Using the ```class``` keyword with the name of the class.
```javascript
class Rectangle {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
}
```

#### Hoisting
The difference between **function declarations** and **class declarations** is that while functions can be called in code that appears before they are defined, classes **_MUST_** be defined before they can be constructed.

_Note_: Failing to declare a class before calling it will result in a ```ReferenceError```

### Class Expressions
A _class expression_ is another way to define a class.

Can be named or unnamed.

The name given to a named expression is _local_ to the class's body. However, it can be access via the ```name``` property
```javascript
// named
let Rectangle = class Rectangle2 {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
};
// output: "Rectangle2"
console.log(Rectangle.name);
```

_Note_: Class expressions **MUST** be declared before they can be used. They are subject to the same hoisting restrictions as class declarations.

### Class body & method definitions
The body of  class is the part that is in curly brackets ```{}```. This is where you define class members, 
such as methods or constructor.

#### Strict Mode
The body of a class is executed in _strict mode_
* Code written here is subject to stricter syntax
    * Increases performance
* Errors that would be otherwise silent will be thrown and certain keywords are reserved for future versions of ECMAScript.

#### Constructor
The _constructor_ method is used for creating and initialling an object created with a ```class```.

There can _only_ be **one** method with the name ```constructor``` in a class.

A ```SyntaxError``` will be thrown if the class contains more than one occurrence of a ```constructor``` method.

A constructor can use the ```super``` keyword to call the constructor of the super class.

