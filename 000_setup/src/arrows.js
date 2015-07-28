var list = [1, 2, 3, 4, 5];

// ES5
list.map(function(v) {
  return v * 2;
});

// ES6
list.map((v) => v * 2);


// ES5
var odds = list.map(function (v) {
  return v + 1;
});

// ES6
var odds = list.map(v => v + 1);

// ES5
var nums = list.map(function (v, i) {
  return v + i;
});

// ES6
var nums = list.map((v, i) => v + i);

/**
 * arrow function forEach
 */

// ES5
list.forEach(function (v) {
  if (v % 5 === 0) {
    console.log(v);
  }
});

// ES6
list.forEach(v => {
  if (v % 5 === 0) {
    console.log(v);
  }
})

// ES5
list.map(function (v) {
  return v * v;
});

// ES6
list.map(v => v * v);

var fn = () => {
  console.log('Hello World!');
}
