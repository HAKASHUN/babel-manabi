function fn(arg1, arg2 = 10) {
  console.log(arg1 + arg2);
}

fn(10); // 20

fn(100, 100); // 200

function rest(...r) {
  console.log(r);
}

rest(1, 2, 3); // [1, 2, 3]

rest(10, 'foo', [5, 20]);// [10, 'foo', Array[2]]

rest('bar'); // ['bar']


function spread(x, y, z) {
  console.log(z);
}

spread(...[1, 2, 3]); // 3
