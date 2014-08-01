// Creating a in a given scope allows you to initialize a new object using the
// `new` keyword.
module.exports =
   // Defining a "class" is simply defining a named function that returns an
   // object.
   function Person(firstName, lastName) {
      this.firstName = firstName;
      this.lastName = lastName;
   }
