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

//higer order functions
const arrayOfArray = [[1,2],[1,2],[1,2,3]]

const newArray = arrayOfArray.reduce((x,y)=> x.concat(y));

console.log(newArray);


// value, test function, update function and a body function

function customFor(val,test,update,body){
    let value = val;
    let loopval = 1;
    while (test(loopval)){
        value = body(val,value);
        console.log(value);
        loopval = update(loopval);
    }
    return value;
}

let lresult = customFor(5, x => x<10, x=> x + 1, (x,y) => x*y)

console.log(lresult);

function customEvery(narry,func){
    for(let each of narry){
        if(!func(each)){
            return false;
        }
    }
    return true;
}


function customEverySome(narry,func){
    result = narry.some(x=>!func(x));
    return !result;

}

console.log(customEvery([1,2,3,4], x=> x == 0));
console.log(customEverySome([1,2,3,4], x=> x == 0));

x= Symbol("cor");
y = Symbol("cor");


// class Vec{
//     constructor (x,y){
//         this.x = x;
//         this.y = y;
//     }
    
//     get length(){
//         const squrdX = Math.pow(this.x,2);
//         const squrdY = Math.pow(this.y,2);
//         return Math.sqrt((squrdX+squrdY));
//     }
//     minus(vector){
//         if(!(vector instanceof Vec)) throw `${vector} must be an instance of Vec class`;  
//         const negvectorX =  -1 * vector.x;
//         const negvectorY = -1 * vector.y;

//         return `{${this.x + negvectorX}, ${this.y + negvectorY}}` 
//     }
//     plus(vector){
//         if(!(vector instanceof Vec)) throw `${vector} must be an instance of Vec class`;
//         return `{${this.x + vector.x}, ${this.y + vector.y}}` 
//     }
// }

// let vector1 = new Vec(3,2);
// console.log(vector1.length);
// console.log(vector1.minus(new Vec(3,2)));
// console.log(vector1.plus(new Vec(3,2)));
// console.log(vector1.minus(3));


class Group{
    constructor(){
        this.group = [];
        this.length = 0;
    }

    add(value){
            if (!this.has(value)) {
                this.group.push(value);
                this.length += 1;
            };
    }

    has(value){
        const valIndex = this.group.indexOf(value); 
        return  this.group[valIndex] ===  value;
    }

    delete(value){
        const valIndex = this.group.indexOf(value)
        if(this.has(value)) this.group.splice(0,valIndex);
    }

    get(){
        return this.group;
    }

    valueOf(index){
        if( index < this.length) return this.group[index];
    }
    length(){
        return this.length;
    }
}


const group = new Group();
group.add(1);
group.add(2);
group.add(3);
group.add(1);

console.log(group);

class GroupIter{
    constructor(object){
        this.objectLength = object.length;
        this.currentIndex = 0;
        this.object = object;
    }

    next(){
        if(this.currentIndex < this.objectLength){
            let value = this.object.valueOf(this.currentIndex)
            this.currentIndex += 1;
            return {value , done: false};
        }
        else {
            return {done:true};
        }

    }
}

Group.prototype[Symbol.iterator] = function(){
    return new GroupIter(this);
}

for(let n of group){
    console.log(n)
}


class Vec{
    constructor (x,y){
        this.x = x;
        this.y = y;
    }
    
    get length(){
        const squrdX = Math.pow(this.x,2);
        const squrdY = Math.pow(this.y,2);
        return Math.sqrt((squrdX+squrdY));
    }
    minus(vector){
      	//checks if the vector arg is an instance of class Vec
        if(!(vector instanceof Vec)) throw `${vector} must be an instance of Vec class`;  
        
      	const negVectorX =  -1 * vector.x;
        const negVectorY = -1 * vector.y;
      	const xSum = this.x + negVectorX;
      	const ySum = this.y + negVectorY;

        return new Vec(xSum,ySum); 
    }
    plus(vector){
        if(!(vector instanceof Vec)) throw `${vector} must be an instance of Vec class`;
        
      	return new Vec((this.x + vector.x),(this.y + vector.y));
    }
  
    get str(){
      return `{${this.x + negvectorX}, ${this.y + negvectorY}}`
    }
}

let vector1 = new Vec(3,2);
console.log(vector1.length);
console.log(vector1.minus(new Vec(3,2)));
console.log(vector1.plus(new Vec(3,2)));
// console.log(vector1.minus(3));

class MultiplicationUnitError extends Error{}

function premativeMultiply(){
    const randomNumber = Math.floor(Math.random() * 10);
    if (randomNumber <= 1){
        return randomNumber * 3;
    }
    throw new MultiplicationUnitError("Oops multiplication error");
}

function premativeWrapper(){
    for(;;){
        try{
            return premativeMultiply();
        }
        catch(e){
            if(e instanceof MultiplicationUnitError){
                console.log("Oops multiplication error");
            }else{
                throw e;
            }
        }
    }
}


console.log(premativeWrapper());


const box = {
    locked:true,
    unlock(){this.locked = false},
    lock(){this.locked = true},
    _content: [],
    get content(){
        if(this.locked) throw new Error("oops box is locked");
        return this._content;
    }
}

function withBoxUnlocked(func){
    box.unlock();
    try{
        func();
        box.lock();
    }catch(e){
        box.lock();
        throw e;
    }
}



let word = "you have a car that pop out love which is a ferrari";

console.log(/ca[tr]/.test(word));
console.log(/[pr]op/.test(word));
console.log(/ferr[etyari]/.test(word));

word = "whatever .,: that makes me curious"
console.log(/ious$/.test(word));
console.log(/\s\.,:|;/.test(word));
word = ""
console.log(/.{6,}/.test(word));

//RegEx eloquentjs book exercise
/* solu1:
    i matched those without alphabet before and after quote took the charaters in between and 
    place them in the middle of double quote
    this worked but did'nt give me what i wanted for all test cases
*/
let quoteReplace = "she said 'i love you' and she aren't joking 'come over' "

quoteReplace = quoteReplace.replace(/[^a-z]'(.+?)'[^a-z]/g," \"$1\" ");
console.log(quoteReplace);

quoteReplace = "she said 'i love you' and she aren't joking 'come over' she said to my place. trust me i wouldn't waste time 'testing it'";

/* solu2:
    i looked for cases where there's one or more alphabet then a single quote
    then one or two alphabet and replaced single quote to caret ^.
    assigned the result to a new binding, then i looked for all other single quotes
    and replace them with doble quote. i then replace the caret ^ with single quote
    as i did first.

    from aren't to aren^t - > aren't 
*/
let apostrophe=  quoteReplace.replace(/\s([a-z]+?)'([a-z]{1,2})\s/g, ' $1^$2 ');
quoteReplace = apostrophe.replace(/'/g,'"');
quoteReplace = quoteReplace.replace(/\s([a-z]+?)\^([a-z]{1,2})\s/g, " $1'$2 ");
console.log(quoteReplace);

let jsNumber = "1e-10"
console.log(/(-|\+)?\.?\d+\.?(e|E)?-?[0-9]+?/.test(jsNumber));

let timefunc = (a) =>{
    setTimeout(()=> console.log("ding!"),3000);
    return a
} 


let fifteen = new Promise((_,reect) => {
    reect(13);
});
fifteen.then(value => console.log(value));
fifteen.catch(value => console.log("me"+ value));