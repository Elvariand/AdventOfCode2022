let input = document.querySelector("#input").textContent;
let myScore = document.querySelector("#myScore");
let hisScore = document.querySelector("#hisScore");

input = input.split("\n");
let score = 0;
let counter = 0;


// input.forEach(element => {
//     element = element.split(" ");
//         console.log(element);
//         switch (element[1]) {
//             case "X":
//                 console.log("X proc pour element [" + counter + "]");
//                 score = score + 1;
//                 switch (element[0]) {
//                     case "A":
//                         score = score + 3;
//                         break;
//                     case "C":
//                         score = score + 6;
//                         break;
//                     default:
//                         break;
//                 }
//             break;
//             case "Y":
//                 console.log("Y proc pour element [" + counter + "]");
//                 score = score + 2;
//                 switch (element[0]) {
//                     case "B":
//                         score = score + 3;
//                         break;
//                     case "A":
//                         score = score + 6;
//                         break;
//                     default:
//                         break;
//                 }
//             break;
//             default:
//                 score = score + 3;
//                 console.log("Z proc pour element [" + counter + "]");
//                 switch (element[0]) {
//                     case "C":
//                         score = score + 3;
//                         break;
//                     case "B":
//                         score = score + 6;
//                         break;
//                     default:
//                         break;
//                 }
//             break;
//         }
//     counter++;
// });


//////////////////// part 2 //////////////////////////////


input.forEach(element => {
    element = element.split(" ");
        console.log(element);
        switch (element[0]) {
            case "A":
                switch (element[1]) {
                    case "X":
                        score = score + 3;
                        break;
                    case "Y":
                        score = score + 4;
                        break;
                    default:
                        score = score + 8;
                        break;
                }
            break;
            case "B":
                switch (element[1]) {
                    case "X":
                        score = score + 1;
                        break;
                    case "Y":
                        score = score + 5;
                        break;
                    default:
                        score = score + 9;
                        break;
                }
            break;
            case "C":
                switch (element[1]) {
                    case "X":
                        score = score + 2;
                        break;
                    case "Y":
                        score = score + 6;
                        break;
                    default:
                        score = score + 7;
                        break;
                }
            break;
            
        }
    counter++;
});

myScore.textContent = score;

