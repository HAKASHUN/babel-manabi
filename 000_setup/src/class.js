/*

ES5

function Animal(name) {
  this.name = name;
}

Animal.prototype.bark = function() {
  alert(this.name + 'is barking');
};

*/

// ES6
class Animal {

  constructor(name) {
    this.name = name;
  }

  bark() {
    alert(this.name + 'is barking');
  }
}

class Cat extends Animal {

  constructor(name) {
    super(name)
  }

  bark() {
    super.bark('meow!!')
  }

}
