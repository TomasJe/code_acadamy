let dob = prompt("Date of Birth");

function getAge(birthYear)
{
    let currentDate = new Date();
    let currentYear = currentDate.getFullYear();
    age = currentYear - birthYear;
    return age;
}

calculatedAge = getAge(dob);

console.log(calculatedAge);