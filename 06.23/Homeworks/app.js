// For and While
// Atspausdinkite skaičių stulpelį nuo 1 iki 100.
//
// Atspausdinkite skaičių stulpelį nuo 1 iki 100.

// for (let i = 1; i <= 100; i++) {
//
//     console.log('For:' + i);
//
// }

// let i = 1;
//
// while (i <= 100) {
//
//     console.log('While:' + i);
//
//     i++;
//
// }

// Atspausdinkite skaičių stulpelį nuo 11 iki 33.

// for (let i = 11; i <= 33; i++) {
//
//     console.log('For:' + i)
//
// }
//
// let i = 11;
//
// while (i <= 33) {
//
//     console.log(`While: ${i}`);
//
//     i++;
//
// }

// Atspausdinkite stulpelį su lyginiais skaičiais nuo 0 iki 100.

// for (let i = 0; i <= 100; i++) {
//
//     if (i % 2 === 0)
//
//         console.log('For:' + i);
//
// }
//
// let i = 0;
//
// while (i <= 100) {
//
//     if (i % 2 === 0)
//
//         console.log('While:' + i);
//
//     i++;
//
// }

// Naudodami ciklą parodykite sumą nuo 1 iki 100.

// let sum = 0;
//
// for (let i = 1; i <= 100; i++) {
//
//     sum = sum + i;
//
// }
//
// console.log('For:' + sum);

// let i = 1;
//
// let sum = 0;
//
// while (i <= 100) {
//
//     sum += i;
//
//     i++;
//
// }
//
// console.log('While:' + sum);

// For ir masyvai
// Duotas masyvas su elementais [1, 2, 3, 4, 5]. Parodykite visus masyvo elementus ekrane.

let arr =[
    1, 2, 3, 4, 5
];

for (let i = 0; i < arr.length; i++) {

    console.log(`Arr: ${arr[i]}`);

}

// Duotas masyvas su elementais [1, 2, 3, 4, 5]. Parodykite šio masyvo elementų sumą.

let sum = arr.reduce(function(a, b) {

    return a + b;

}, 0);
//
// console.log(sum);
