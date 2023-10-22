// Ejemplo de push()
const myArray1 = [1, 2, 3];
myArray1.push(4);
// myArray ahora es [1, 2, 3, 4]

// Ejemplo de pop()
const myArray2 = [1, 2, 3, 4];
myArray2.pop();
// myArray ahora es [1, 2, 3]

// Ejemplo de shift()
const myArray3 = [1, 2, 3, 4];
myArray3.shift();
// myArray ahora es [2, 3, 4]

// Ejemplo de unshift()
const myArray4 = [1, 2, 3, 4];
myArray4.unshift(0);
// myArray ahora es [0, 1, 2, 3, 4]

// Ejemplo de slice()
const myArray5 = [1, 2, 3, 4, 5];
const newArray6 = myArray5.slice(2, 4);
// newArray ahora es [3, 4]

// Ejemplo de concat()
const myArray1_1 = [1, 2, 3];
const myArray2_1 = [4, 5, 6];
const newArray7 = myArray1_1.concat(myArray2_1);
// newArray ahora es [1, 2, 3, 4, 5, 6]

// Ejemplo de sort()
const myArray8 = [1, 5, 3, 2, 4];
myArray8.sort();
// myArray ahora es [1, 2, 3, 4, 5]

// Ejemplo de reverse()
const myArray9 = [1, 2, 3, 4, 5];
myArray9.reverse();
// myArray ahora es [5, 4, 3, 2, 1]

// Ejemplo de includes()
const myArray10 = [1, 2, 3, 4, 5];
myArray10.includes(3); // true

// Ejemplo de indexOf()
const myArray11 = [1, 2, 3, 4, 5];
myArray11.indexOf(3); // 2

// Ejemplo de lastIndexOf()
const myArray12 = [1, 2, 3, 3, 4, 5];
myArray12.lastIndexOf(3); // 4

// Ejemplo de forEach()
const myArray13 = [1, 2, 3, 4, 5];
myArray13.forEach((element) => {
  console.log(element);
});
// 1
// 2
// 3
// 4
// 5

// Ejemplo de map()
const myArray14 = [1, 2, 3, 4, 5];
const newArray15 = myArray14.map((element) => {
  return element * 2;
});
// newArray ahora es [2, 4, 6, 8, 10]