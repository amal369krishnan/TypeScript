function add(value1:number, value2:number){
    return value1 + value2
}

function resultProducer(num:number):void{
    console.log('The result is : '+ num);
}

// if set type of function as undefined, need a return otherwise show error!!
// function resultProducer(num:number):undefined{
//     console.log('The result is : '+ num);
//     return;
// }

console.log(resultProducer(add(23,32)));

let name1 = undefined //variables can be 'undefined'
console.log('name is : '+ name1);

//Above functions are written in an advanced way:
function addAndHandle(value1:number, value2:number, rp:(num:number)=>void){
    rp(value1 + value2);
}

addAndHandle(23,32,(res)=>{
    console.log("Result is : "+res);
})