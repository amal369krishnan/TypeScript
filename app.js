function add(value1, value2) {
    return value1 + value2;
}
function resultProducer(num) {
    console.log('The result is : ' + num);
}
// if set type of function as undefined, need a return otherwise show error!!
// function resultProducer(num:number):undefined{
//     console.log('The result is : '+ num);
//     return;
// }
console.log(resultProducer(add(23, 32)));
var name1 = undefined;
console.log('name is : ' + name1);
function addAndHandle(value1, value2, rp) {
    rp(value1 + value2);
}
addAndHandle(23, 32, function (res) {
    console.log("Result is : " + res);
});
