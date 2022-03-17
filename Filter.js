function filter (list, callback) {
	let newList = [];
	for( let i = 0; i < list.length; i++) {
	    const result = callback(list[i]);
	    if(result)
		    newList.push(list[i]);
    }
    return newList;
}

let numbers = [1,2,3,4,5];
let oddNumbers = filter(numbers, num => num%2 !== 0);
console.log(oddNumbers)
console.log(numbers)
