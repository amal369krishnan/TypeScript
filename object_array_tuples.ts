const person:{name:string, age:number, hobbies:string[], role:[number,string]} = {
    name:"Amal Krishnan R",
    age:28,
    hobbies:['Gaming', 'planting and caring plants', 'photography'],
    role:[1,'Amal']//act as a tuple
};

person.role.push('Hari')//this is only one worked in tuple
// person.role[1]  = 12//throws error, because role is explicitly added type
// person.role = [1,'Arun',3]//throws error, because role is explicitly added type

const person1 = {
    name:"Amal Krishnan R",
    age:28,
    hobbies:['Gaming', 'planting and caring plants', 'photography']
};

const person2:{name:string, age:number, hobbies:any[]} = {
    name:"Amal Krishnan R",
    age:28,
    hobbies:['Gaming', 2, 'photography']
};

console.log(person.hobbies);
console.log(person1.hobbies);
console.log(person2.hobbies);

