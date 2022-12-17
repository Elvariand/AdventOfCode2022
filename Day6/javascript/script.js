let input = document.querySelector("#input").textContent;
let answer = document.querySelector("#answer");
let answer2 = document.querySelector("#answer2");
let toReplace = "";
let isDoubled = true;
let counter = 0;

let i = 14;

while(isDoubled == true && i < input.length) {
    isDoubled = false;
    let tested = input.substring(i-14,i);
    console.log(tested + " " + i);
    for (j=0; j<14; j++) {
        for(k=j+1; k<15; k++) {
            if (tested[j] === tested[k]) {
                isDoubled = true;
                break;
            }
            if (isDoubled == true) break;
        }
        if (isDoubled == true) break;
    }
    i++;
    if (isDoubled == false) toReplace = "The marker is : " + tested + " and the position is : " + i;
}



if (toReplace != "") answer.textContent = toReplace;