type combineType = number | string;
type combineResult = 'as-number' | 'as-text'

function combine(val1:combineType, val2:combineType, resultArgs:combineResult){
    let result;
    if(typeof val1==='number' && typeof val2 === 'number'||resultArgs==='as-number'){
        result = +val1 + +val2;
    }
    else{
        result = val1.toString() + val2.toString();
    }
    return result;
}

const combineAges = combine(28,24,'as-number');
console.log(combineAges);

const combineAge = combine('28','24','as-number');
console.log(combineAge);

const combineName = combine('Amal','Krishnan','as-text')
console.log(combineName);

