//Write a program that takes in an unlimited number of command line arguments
//and prints out the sum of them. If any argument is not a whole nmber, skip it.
//Do not support negative numbers.

// console.log(process.argv);
const array = process.argv.slice(2)
// console.log(array);
// const array = process.argv.splice(0, 2);
// console.log(array);


const test = ['10', '5', 0, 'apple', -5, 3, 12];

// for (let index = 0; index < test.length; index++) {
//   console.log(test[index]);
// };

//console.log();

let total = 0;

for (const value of array) {
  const converted = Number(value);
  if (Number.isInteger(converted)){
      total += converted;
  };
};

console.log("Total ", total);

// console.log();

// for(const index in test){
//   console.log(test[index]);
// };