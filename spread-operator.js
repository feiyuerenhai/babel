var arr = [1,2,3];

var obj = {
	a: 'love',
	b: 'hate'
};

var fn = function(x,y){
	console.log(y); //=> 1、2、3中的2
	//三点运算符，作用于可遍历数据结构，如对象和数组，它会将数据结构中的数值转换为“待用”实参
}(...arr);

console.log( ...arr ) //=> 1 2 3
console.log([...arr]) //=> [1,2,3]，将实参再转换为数组
console.log([...arr, ...[4, 5]]) //=> [1,2,3,4,5]，拼接数组
console.log({...arr}) //=> { '0': 1, '1': 2, '2': 3 }，实参再转换为对象
console.log( ...obj ) //=> 空，对象key-value实参
console.log([...obj]) //=> []，对象key-value实参无法转换为数组
console.log({...obj}) //=> { a: 'love', b: 'hate' }
console.log({...obj, ...{c: 'ok'}}) //=> { a: 'love', b: 'hate', c: 'ok' }，拼接对象

//总之，...会遍历后面的数据对象，得到实参队列，再根据上下文将实参队列转换为其他合适的数据结构，如数组和对象，无法转换的将得到空数据结构