function reduce (list, callback, initialValue) {
	let value = initialValue === undefined ? 1 : initialValue;
	for( let i = 0; i < list.length; i++ ){
	    value = callback(value, list[i]);
    }
    return value;
}

function productReducer(product, value){
	return product*value;
}

let numbers = [1,2,3,4,5];
let productOfNumbers = reduce(numbers, productReducer);

console.log(numbers);
console.log(productOfNumbers);