let input = document.querySelector("#input").textContent;
let calories = document.querySelector("#calories");
let elf = document.querySelector("#elfNumber");

input = input.split("\n\n");

arrayElvesCalories = [];

input.forEach(element => {
    element = element.split("\n");
    sumCal = 0;
    element.forEach(el => {
        sumCal = sumCal + parseInt(el);
    })
    arrayElvesCalories.push(sumCal);
});


calories.textContent = Math.max(...arrayElvesCalories);
elf.textContent = arrayElvesCalories.indexOf(parseInt(calories.textContent));


// ////////////////////  For Part 2

let maxCal1 = Math.max(...arrayElvesCalories);
arrayElvesCalories.splice(arrayElvesCalories.indexOf(maxCal1),1);

console.log(arrayElvesCalories.indexOf(maxCal1))

let maxCal2 = Math.max(...arrayElvesCalories);
arrayElvesCalories.splice(arrayElvesCalories.indexOf(maxCal2),1);

let maxCal3 = Math.max(...arrayElvesCalories);
let totalCal = maxCal1 + maxCal2 + maxCal3;

console.log("Colories first = " + maxCal1);
console.log("Colories second = " + maxCal2);
console.log("Colories third = " + maxCal3);
console.log("total Calories = " + totalCal);






//////////////////////////////////////
