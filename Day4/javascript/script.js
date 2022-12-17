let input = document.querySelector("#input").textContent;
let answer = document.querySelector("#answer");
let answer2 = document.querySelector("#answer2");
let toReplace = "";

input = input.split("\n");

let score = 0;
let counter = 0;


// input.forEach(pair => {
//     let arrayPairs = pair.split(",");
//     let arrayRange = [];
//     score++;
//     arrayPairs.forEach(range => {
//         arrayRange.push(range.split("-"))
//     })
//     if ((parseInt(arrayRange[0][0]) <= parseInt(arrayRange[1][0]) && parseInt(arrayRange[0][1]) >= parseInt(arrayRange[1][1]))
//     || (parseInt(arrayRange[0][0]) >= parseInt(arrayRange[1][0]) && parseInt(arrayRange[0][1]) <= parseInt(arrayRange[1][1]))) {
//         console.log(arrayRange);
//         counter++;
//         console.log("counter = " + counter);
//         console.log("it's pair n° " + score);
//     }
    
// });





input.forEach(pair => {
    let arrayPairs = pair.split(",");
    let arrayRange = [];
    score++;
    arrayPairs.forEach(range => {
        arrayRange.push(range.split("-"))
    })
    if ((parseInt(arrayRange[0][0]) <= parseInt(arrayRange[1][0]) && parseInt(arrayRange[0][1]) >= parseInt(arrayRange[1][0]))
    || (parseInt(arrayRange[0][0]) <= parseInt(arrayRange[1][1]) && parseInt(arrayRange[0][1]) >= parseInt(arrayRange[1][1]))
    || (parseInt(arrayRange[0][0]) <= parseInt(arrayRange[1][0]) && parseInt(arrayRange[0][1]) >= parseInt(arrayRange[1][1]))
    || (parseInt(arrayRange[0][0]) >= parseInt(arrayRange[1][0]) && parseInt(arrayRange[0][1]) <= parseInt(arrayRange[1][1]))) {
        console.log(arrayRange);
        counter++;
        console.log("counter = " + counter);
        console.log("it's pair n° " + score);
    }
    
});


toReplace = counter;


if (toReplace != "") answer.textContent = toReplace;