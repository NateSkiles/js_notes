## Notes On ES6 Features

### Const vs. Let (See ya later var) -
#### Const:
* ```const``` are block-scoped, much like variables declared using the ```let``` keyword. 
* Can **_NOT_** be _reassigned_ or _redeclared_
* If a constant is an _object_ or _array_, its properties or items **_can_** be updated or removed.
#### Let:
* ```let```  are block-scoped local variables, initializing it to a valve is _optional_.
    * ```var``` declares a variable globally, or locally to an entire function _regardless_ of block-scope.
* _Note:_ Many issues with ```let``` can be avoided by declaring them at the top of the scope in which they are used (doing so may impact readability).

