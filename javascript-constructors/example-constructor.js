function ExampleConstructor() {}
console.log('prototype property of ExampleConstructor:', ExampleConstructor.prototype);
console.log('typeof prototype property of ExampleConstructor:', typeof ExampleConstructor.property);

var newExample = new ExampleConstructor();
var isInstance = newExample instanceof ExampleConstructor;
console.log('Is newExample an instance of ExampleConstructor?:', isInstance);
