//example of using local or own module

const {name1, address, organization}=require('./student');

console.log(name1);
console.log(address());

// const s=require('./student');
// console.log(s.fatherName);
// console.log(s.motherName);
// console.log(organization);