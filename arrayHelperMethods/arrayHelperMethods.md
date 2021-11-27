## Array Helper Methods

#### Reasons for not writing traditional for loops:
* Hard to parse. 
* Less room for errors
* Hard to troubleshoots

<br>
<br>

#### .forEach() - 
Used for iterating through an array.

Takes an anonymous function as an argument and runs that function on each element of the array.

The function being passed is called the _iterator function_.

``` javascript
arrayOfObjects.forEach(function(arrayObject) {
    console.log(arrayObject)
})
```

<br>
<br>

#### .map() - 
Avoid mutating data of an area, instead create a new array.

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
<br>

#### .filter() - 
Array item is checked against the iterator function..
* returns true => item is included in product array
* returns false => item is excluded from product array.

```javascript
let filteredArray = array.filter(function (element) {
     return product.attribute === 'foo bar';
})
```

Do **_NOT_** forget a ```return``` statement.

<br>
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
<br>

#### .every() & .some() - 
A little **_every_** a lot of **_some_**.

* If iterator function of _```.every()```_ returns true for **_ALL_** element of the array _=>_ then return true..
    * else, return false.
* If iterator function of _```.some()```_ returns true for **_SOME_** elements of the array _=>_ then return true..
    * else return false if _none_ of the elements return true.

<br>
<br>

#### .reduce() -
Executes a reduced function foreach value of an array.

Returns a single value which is the function's _accumulated_ result.

Does not execute the function for empty array elements.

Does not change the original array

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

