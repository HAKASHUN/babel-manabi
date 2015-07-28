// 分解代入
/**
 * a = 1
 * b = 2
 */
var [a, b] = [1, 2];

/**
 * c = 3
 * d = 5
 */
var [c, , d] = [3, 4, 5];

/**
 * year = 2013
 * mounth = 12
 */
var { y: year, m: month } = { y: 2013, m: 12 };

/**
 * 関数の引数に適応した場合
 * @param x
 */
function g({name: x}) {
  console.log(x);
}

// console.log => 'HAKASHUN'
g({name: 'HAKASHUN'});
