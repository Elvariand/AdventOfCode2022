// let input = document.querySelector("#input").textContent;
// let answer = document.querySelector("#answer");
// let answer2 = document.querySelector("#answer2");
// let toReplace = "";

// input = input.split("\n");

// let counter = 0;
// let arrayDual = [];

// input.forEach(rucksack => {
//     let double = false;
//     let length = rucksack.length;
//     rucksack = [rucksack.substr(0, length /2), rucksack.substr(length/2, length -1)];
//     console.log(rucksack);
//     for(let j = 0; j < rucksack[0].length; j++) {
//         for(let i = 0; i < rucksack[1].length; i++) {
//             if (rucksack[0][j] == rucksack[1][i]) {
//                 arrayDual.push(rucksack[0][j]);
//                 double = true;
//                 break
//             }
//         }
//         if (double == true) break;
//     }
// });

// console.log(arrayDual);

// let priorities = "0abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"

// arrayDual.forEach(element => {
//     let priorityNumber = priorities.indexOf(element)
//     console.log("Package " + element + " priority " + priorityNumber);
//     counter = counter + priorityNumber;
// });

// toReplace = counter;

// if (toReplace != "") answer.textContent = toReplace;



////////////////////////// PART 2 //////////////////////////



let input = document.querySelector("#input").textContent;
let answer = document.querySelector("#answer");
let answer2 = document.querySelector("#answer2");
let toReplace = "";

input = input.split("\n");

let counter = 0;
let arrayTriple = [];

for(let group = 0; group < input.length; group += 3) {
    let triple = false;
    for(let k = 0; k < input[group].length; k++) {
        for(let j = 0; j < input[group+1].length; j++) {
            if (input[group][k] == input[group+1][j]) {
                for(let i = 0; i < input[group+2].length; i++) {
                    if (input[group+2][i] == input[group][k]) {
                        triple = true;
                        arrayTriple.push(input[group][k]);
                        break
                    }
                }
            }
            if (triple == true) break;
        }
        if (triple == true) break;
    }
};

console.log(arrayTriple);

let priorities = "0abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"

arrayTriple.forEach(element => {
    let priorityNumber = priorities.indexOf(element)
    console.log("Package " + element + " priority " + priorityNumber);
    counter = counter + priorityNumber;
});

toReplace = counter;

if (toReplace != "") answer.textContent = toReplace;