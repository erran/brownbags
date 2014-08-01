# JavaScript
## Classes
Classes *do not* exist. See [Functions](#functions) and [Objects](#objects).

## Types
### Functions
Functions are first-class citizens and can be used as closures.

```javascript
typeof function(){}
// > 'function'
```

```javascript
var validateRecipient = function(recipient) {
  return recipient || "World";
}

// "void" functions return "undefined"
var sayHello = function(recipient) {
  recipient = validateRecipient(recipient);
  console.log("Hello "+recipient+"!")
}

console.log(sayHello);
// > [Function]
sayHello();
sayHello('Bob');
```

```javascript
// Naming a function helps while debugging errors
var divide = function divide(x, y) {
  throw new Error("This error was thrown from a named function.");
}

divide(42, 0)
```

### Undefined
In JavaScript the default value is `undefined` rather than `null` in several
cases, such as when a property is not defined for a method.
```javascript
typeof undefined
// > 'undefined'
```

### Objects
#### Object
Basic objects can be instantiated using the literal `{}` or `new Object()`.
This type accesses properties via key/value pairs in addition to the functions
you can define on it.

```javascript
typeof {}
// > 'object'
```

#### Arrays
Arrays are a list of objects that can be accessed via indices using `arr[n]`.
These objects can be instantiated using the literal `[]` or `new Array()`.

```javascript
typeof []
// > 'object'
```

#### Null
`null` is considered a type of object.

```javascript
typeof null
// > 'object'
```

## Other Types
These types are fairly standard across languages.

### Boolean
```javascript
typeof true
// > 'boolean'

typeof false
// > 'boolean'
```

### Numbers
```javascript
typeof 123
// > 'number'
```

### Strings
```javascript
typeof 'foo bar baz'
// > 'string'
```
