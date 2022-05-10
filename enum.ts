enum Role {Developer=2, Admin='Admin', Client=0}

const person = {
    name:'Amal',
    age:28,
    role:Role.Admin
}

if(person.role === 'Admin'){
    console.log(person.role);
}
