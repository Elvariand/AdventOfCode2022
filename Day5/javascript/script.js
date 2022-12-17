let input = document.querySelector("#input").textContent;
let answer = document.querySelector("#answer");
let answer2 = document.querySelector("#answer2");
let toReplace = "";

input = input.split("\n");



let score = 0;
let counter = 0;

// let array1 = ["Z","J","G"];
// let array2 = ["Q","L","R","P","W","F","V","C"];
// let array3 = ["F","P","M","C","L","G","R"];
// let array4 = ["L","F","B","W","P","H","M"];
// let array5 = ["G","C","F","S","V","Q"];
// let array6 = ["W","H","J","Z","M","Q","T","L"];
// let array7 = ["H","F","S","B","V"];
// let array8 = ["F","J","Z","S"];
// let array9 = ["M","C","D","P","F","H","B","T"];
// let piles = [[0], array1, array2, array3, array4, array5, array6, array7, array8, array9];



// input.forEach(command => {
//     command = command.split(" ");
//     command = command.filter(isFinite);
//     piles = move(piles, parseInt(command[0]), parseInt(command[1]), parseInt(command[2]));
    
//     console.log(piles);
// });

// function move(array2D, number, from, to) {
//     for(i = 1; i <= number; i++) {
//         var popped = array2D[from].pop();
//         array2D[to].push(popped);
//     }
//     return array2D
// }

//////////////////// part 2 /////////////////////////////////////////


// move 1 from 5 to 6
// move 5 from 6 to 7
// move 10 from 7 to 3
// move 4 from 8 to 4
// move 2 from 5 to 4
// move 4 from 3 to 6
// move 6 from 2 to 4
// move 8 from 6 to 9



let str1 = "ZJG";
let str2 = "QLRPWFVC";
let str3 = "FPMCLGR";
let str4 = "LFBWPHM";
let str5 = "GCFSVQ";
let str6 = "WHJZMQTL";
let str7 = "HFSBV";
let str8 = "FJZS";
let str9 = "MCDPFHBT";
let piles = [0, str1, str2, str3, str4, str5, str6, str7, str8, str9];


input.forEach(command => {
    command = command.split(" ");
    command = command.filter(isFinite);
    piles = move(piles, parseInt(command[0]), parseInt(command[1]), parseInt(command[2]));

});

function move(array, number, from, to) {

    let toSub = array[from].substr(array[from].length - number, number);


    array[to] = array[to].concat(toSub);


    array[from] = array[from].substr(0, array[from].length - number);


    return array
}

console.log(piles);






if (toReplace != "") answer.textContent = toReplace;