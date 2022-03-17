function forEach(list, callback){
    for( let i = 0; i < list.length; i++)
        callback(list[i]);
}

let numbers = [1,2,3,4,5];
forEach(numbers, num => console.log(num));