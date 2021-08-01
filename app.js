//git username goodnewsj62
//chapter 2
let step = 0;
let board = ""

// for case 8*8
for(let i =0; i <8; i++){
    if (step === 0){
        board=" # # # #\n";
        step ++;
    }else{
        board="# # # # \n";
        step = 0;
    }
    console.log(board);
}

console.log(" --------------------- ");

// adaptive
step =0;
let count = step;

for(let i =0; i < 10; i++){
    board ="";
    for(let j = step; j < (10+ step); j++){
        if(j%2 === 0){
            board = board + " ";
        }
        else{
            board = board + "#";
        }
    }
    step++;
    console.log(board + "\n");
}

/*whats going on here in this recursion
algorithm is the stack(the computer keeping 
fuction call context to return excution to)
so after a value is returned the computer moves to the
previous call down the stack till it get to the first call

for every repeated call the stack keeps pilling up
*/
function findSolution(target) {
    console.log("start top")
    function find(current, history) {
    console.log(current,history);
    if (current == target) {
        return history;
    } else if (current > target) {
        console.log("returned null")
        return null;
    } else {
        console.log("again!")
        return find(current + 5, `(${history} + 5)`) ||
        find(current * 3, `(${history} * 3)`);
    }
    }
    console.log("hit me");
    return find(1, "1");
    }
    console.log(findSolution(9));



// function chapter
function min(num1,num2){
    if(num1 > num2) return num2
    else return num1;
}

console.log(min(5,2));

function isEven(num){
    if (num == 0){
        return true;
    }
    else if (num == 1){
        return false;
    }
    else if (String(num).slice(0,1) == "-"){
        return isEven(num + 2);
    }
    else{
        return isEven(num - 2);
    }
}

console.log(isEven(-6));


//data structure
console.log('###################################');


function range(start=0,end,step=1){
    const list = [];

    if((''+step)[0] == '-'){
        for(; start > end; start += step){
            list.push(start);
        }
    }
    else{
        for(;start < end; start += step){
            list.push(start);
        } 
    }
    return list
}

function sum(array){
    let sum = array.reduce(function(accumulate,current){
        return accumulate +current;
    });
    return sum
}
console.log(sum(range(5,2,-2)))

function reverseArray(array){
    const new_array = []
    for(let each of array){
        new_array.unshift(each);
    }
    return new_array;
}


console.log(reverseArray([1,2,7,8]));

function reverseArrayInPlace(array){
    start = 0
    end = array.length -1;
    mid = (end + 1)/2

    for(let i = 0; i < mid; i++){
        let current = array[i]
        array[i] = array[(end - i)];
        array[(end - i)] = current;
    }
    return array;
}


console.log(reverseArrayInPlace([1,2,3,4]))

function arrayToList(array){
    let length = array.length - 1;
    function toObject(index = 0){
        if (index == length) return {value:array[length], rest:null};
        else{
            return {value:array[index], rest:toObject(index + 1)};
        }
    }
    return toObject();
} 

linkedList = arrayToList([1,2,3]);
console.log(linkedList);

function listToArrayLoop(list){
    let prev_object = list;
    const array = []
    while (true){
        array.push(prev_object.value);
        if(prev_object.rest != null){
            prev_object = prev_object.rest;
        }
        else break;
    }

    return array;
}

function listToArrayRecursive(list){
    const array = []
    function pushValue(field = list){
        if(field.rest==null){
            array.push(field.value);
            return array;
        }
        else{
            array.push(field.value);
            return pushValue(field.rest);
        }
    }
    return pushValue();
}
passedInArray = listToArrayLoop(linkedList); 
passedInArray2 = listToArrayRecursive(linkedList);
console.log(passedInArray);
console.log(passedInArray2);

function prepend(element,list){
    return {value:element,rest:list}
}

console.log(prepend(-1,linkedList));

function nth(index,list){
    let count = 0;
    function nextBranch(field = list){
        if(index == count)return field.value;
        else if (field.rest == null) return undefined;
        else{
            count += 1;
            return nextBranch(field.rest);
        }
    }

    return nextBranch();
}

function nthLoop(index,list){
    let count = 0;
    let prev_object = list;
    let result;
    while (true){
        if(count == index){
            result = prev_object.value
            break;
        }
        else if (prev_object.rest == null) break;
        else prev_object = prev_object.rest;

        count += 1;
    }   

    return result;
}
console.log(nth(1,linkedList));
console.log(nthLoop(1,linkedList));


function deepEqual(value1,value2){
    
    if(value1 === value2) return true;
    else if(value2 != null && value1 !=null){
        if(typeof value1 === "object" && typeof value2 === "object"){
            value1_keys = Object.keys(value1);
            value2_keys = Object.keys(value2);
            for(let i=0; i < value1_keys.length;i++ ){
                if(value1_keys[i] != value2_keys[i]) return false;
                else if(value1[value1_keys[i]]  != value2[value2_keys[i]])return false;
            }
            return true;
        }
        else return false;
    }
    else return false;
}

console.log(deepEqual({"q":1},{"a":1}));

