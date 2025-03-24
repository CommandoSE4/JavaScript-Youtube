// console.log(2 > 1);
// console.log(2 < 1);
// console.log(2 <= 1);
// console.log(2 <= 1);
// console.log(2 == 1);
// console.log(2 != 1);

// console.log("2" > 1);
//console.log("02" > 1);

console.log(null > 0);      //The reason is that an equality check == and
console.log(null == 0);     //comparison > < >= <= work differently
console.log(null >= 0);     //Comparion converts null to a number, treating
                            //it as 0 ie why null>=0 true; null==0 false
console.log(undefined == 0);
console.log(undefined > 0);     //all false
console.log(undefined < 0);

// ===

console.log("2" === 2);
