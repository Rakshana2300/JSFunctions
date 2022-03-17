function map(list, callback){
    let newList = [];
    for (let i = 0; i < list.length; i++){
        const result = callback(list[i]);
        newList.push(result);
    }
    return newList;
}

let numbers = [1,2,3,4,5];
let twiceOfNumbers = map(numbers, num => num*2);
console.log(numbers);
console.log(twiceOfNumbers);