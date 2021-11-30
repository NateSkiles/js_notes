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



