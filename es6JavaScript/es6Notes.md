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

