console.log(`THEME #1`);

console.log(`Task  #1\n\n`);
findRoots(1, 4, 4);
findRoots(4, 4, 1);
findRoots(4, 1, 4);

console.log("\n\nTask #2");
isSimple(1);
isSimple(2);
isSimple(5);
isSimple(24);

console.log("\n\nTask #3");
findS(1);
findS(5);

console.log("\n\nTask #4");
reverseNumber(54321);





console.log(`\n\n\n\nTHEME #2`);

console.log(`Task  #1\n\n`);
divideArray([-3, -1, 0, 1, 3]);

console.log(`Task  #2\n\n`);
calculateRepeats([-3, -1, -3, 0, 1, 0, 3]);

console.log(`Task  #3\n\n`);
console.log(isAnagramms('ball', 'lab'));
console.log(isAnagramms('ball', 'lalb'));





console.log(`\n\n\n\nTHEME #3`);
let fridge = new Fridge(1000);

console.log(fridge.getFood());
console.log(fridge.addFood('meat'));
console.log(fridge.getFood());
console.log(fridge.enable());
console.log(fridge.addFood('meat'));
console.log(fridge.getFood());
console.log(fridge.addFood('bread1','bread2','bread3','bread4','bread5','bread6','bread7', 'bread8','bread9'));
console.log(fridge.getFood());
console.log(fridge.addFood('meat'));