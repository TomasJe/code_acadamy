// let workers = {
//     worker: 'Mantas',
//     workerOne: 'Paulius',
//     workerTwo: 'Mindaugas',
//     salary: 200,
//     salaryOne: 300,
//     salaryTwo: 300
// };
//
// console.log(`${workers.worker} - ${workers.salary} EU atlyginimas.`);
// console.log(`${workers.workerOne} - ${workers.salaryOne} EU atlyginimas.`);
// console.log(`${workers.workerTwo} - ${workers.salaryTwo} EU atlyginimas.`);



// Sukurkite objektą su raktais Mantas, Paulius, Mindaugas ir reikšmėm 200, 300, 300.
let workers = {
    Mantas: 200,
    Paulius: 300,
    Mindaugas: 300
};
// Parodykite eilutes tokiu formatu: Mantas - 200 EU atlyginimas.
for (let key in workers)
{
    console.log(`${key} - ${workers[key]} EU`)
}