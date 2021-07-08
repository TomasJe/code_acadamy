const budget = 8487300000;

const people = 1761463;

let salary = prompt('Iveskite bazinio uzmokescio dydi');

console.log(salary);

let budgetpercentage = (salary * people * 100/ budget);

console.log(budgetpercentage);

document.write(`Jei kiekvienas zmogus gautu ${salary} , tai sudarytu ${budgetpercentage} viso biudzeto.`);