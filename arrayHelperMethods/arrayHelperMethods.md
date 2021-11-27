## Array Helper Methods

#### Reasons for not writing traditional for loops:
* Hard to parse. 
* Less room for errors
* Easier to troubleshoot

#### .forEach() - 
Used for iterating through an array.

Takes an anonymous function as an argument and runs that function on each element of the array.

The function being passed is called the **_iterator function_**.

``` javascript
arrayOfObjects.forEach(function(arrayObject) {
    console.log(arrayObject)
})
```
#### .map() - 
Avoids mutating data of an array, instead create a new array.

Returns an array.

Runs a function on **each** element of an array.

Useful for _plucking_ an attribute's value from a object.
```javascript
function pluck(array, property) {
    return array.map(function (element) {
        return element[property];
    });
}
```
Do **_NOT_** forget a ```return``` statement.

<br>

#### .filter() - 
Array item is checked against the iterator function..
* returns true => item is included in product array
* returns false => item is excluded from product array.

```javascript
let filteredArray = array.filter(function (element) {
     return product.property === 'foo bar';
})
```

Do **_NOT_** forget a ```return``` statement.

<br>

#### .find() - 
Returns the **_first_** record matching the find criteria from the iterator function.

Very useful for finding a single record or object.

```javascript
let foundElement = array.find(function (element) {
    return user.property === 'foobar';
})
```

Do **_NOT_** forget a ```return``` statement.

<br>

#### .every() & .some() - 
A little of **_every_** a lot of **_some_**.

*  _```.every()```_: If iterator function returns true for **_ALL_** elements of the array _=>_ then return true.
    * _else_, return false.
*  _```.some()```_: If iterator function returns true for **_SOME_** elements of the array _=>_ then return true..
    * else return false if _none_ of the elements return true.

<br>

[comment]: <> (Look into .reduce further -- need a bit more info)
#### .reduce() -
Executes a reduce function for each value of an array.

* Returns a single value which is the function's _accumulated_ result.
* Does _not_ execute the function for empty array elements.
* Does _not_ change the original array

```javascript
var reduceSum = array.reduce(function (sum, element) {
    return sum + element;
},
    // Initial Value
    0
);
```

The initial value can be set to whatever you want the starting value of the method to be. 

For example, with for an array:
```javascript
let accumulation = array.reduce(function (accumulator, element) {
    accumulator.push(array.element);

    return accumulator;
}, []);
```

