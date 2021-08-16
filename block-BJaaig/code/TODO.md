## Find the output

For the give code below write the output/error along with the reason!

```js
let user = {
  username: 'John',
  sayHello(message = 'Hello') {
    console.log(message + ' ' + this.username);
  },
};

let user2 = {
  username: 'Arya',
  sayHello(message = 'Hello') {
    console.log(message + ' ' + this.username);
  },
};
let user3 = {
  username: 'Bran',
};

function MainUser() {
  this.username = 'Tyrion';
  this.sayHello = function sayHello(message = 'Hello') {
    console.log(message + ' ' + this.username);
  };
}

let userSayHello = user.sayHello;

console.log(user.sayHello()); // Hello John 
console.log(user2.sayHello()); // Hello Arya 
console.log(user.sayHello.call(user2)); // Hello Arya
console.log(user.sayHello.call(user2, 'Hey')); // Hey Arya
console.log(user.sayHello.apply(user2, ['Hey'])); // Hey Arya
console.log(typeof user.sayHello.bind(user2)); // "function" bind always returns a new function reference
console.log(user.sayHello.bind(user2)()); // Hello Arya
console.log(userSayHello()); // Hello undefined Because cant access `this`  
console.log(typeof userSayHello.bind(user2)); // "function" 
console.log(userSayHello.bind(user2)()); // Hello Arya
console.log(user3.sayHello()); // ReferenceError: user3.sayHello is not defined because user3 can not access the methods defined in other users.
console.log(userSayHello.apply(user3)); // Hello Bran
console.log(userSayHello.call(user3)); // Hello Bran
console.log(typeof new MainUser()); // "object" because `new` always creates a new object.
console.log(typeof new MainUser); // "object" because `new` always creates a new object.
console.log(new MainUser().sayHello()); // Hello Tyrion
console.log(new MainUser().sayHello.call(user2)); // Hello Arya
console.log(new MainUser().sayHello.call(user)); // Hello John
console.log(
  new MainUser().sayHello.apply(user, ['Welcome!'])
); // Welcome! John
```
