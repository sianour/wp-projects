
let MyArrey = [];
for(let i=0; i<5; i++){
    let faveColor = prompt("Please Enter Your Favorite Color *only teal count*" + (i+1));
    MyArrey.push(faveColor);
    
}
console.log(MyArrey);

//reduce Arrey Method

let numbers = [195, 50, 75, 30];
let reduceNumbers = numbers.reduce(myFunc);
function myFunc(total, value){
    return total - value;
}
console.log(reduceNumbers)

//reduce right Arrey Method
let unify = [195, 50, 75, 30];
let  unit = unify.reduceRight(Func);
function Func(x, y){
    return x + y;
}
console.log(unit)

let names = ["siavash", "sepehr", "korosh", "farhad"];
let person = names.reduce(sum);
function sum( NP, PN){
    return NP + PN;
}
console.log(person)

let Names = ["siavash", "sepehr", "korosh", "farhad"];
let Person = Names.reduceRight(sum2);
function sum2( np, pn){
    return np + pn;
}
console.log(Person)




