// Iteration 1: Names and Input
let hacker1 = "Guillaume";
let hacker2 = "Walid";
console.log("The driver's name is " + hacker1);
console.log("the navigator's name is " + hacker2);
// Iteration 2: Conditionals
if (hacker1.length>hacker2.length){
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`)
}
else if (hacker1.length<hacker2.length){
    console.log(`it seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
}
else if (hacker1.length === hacker2.length){
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`)
}

// Iteration 3: Loops
// 3.1
let res = "";
for (let i = 0; i < hacker1.length; i++){
    res += hacker1[i].toUpperCase();
    res += " ";
}
console.log(res);

//3.2

let res2 = "";
for (let i = hacker1.length - 1; i >= 0; i--){
    res2 += hacker1[i];
}
console.log(res2);

//3.3
let lenMin;
if (hacker1.length>hacker2.length){
    lenMin = hacker2.length;
}
else if (hacker1.length<hacker2.length){
    lenMin = hacker1.length;
}
else if (hacker1.length === hacker2.length){
    lenMin = hacker1.length;
}


let hack1 = "";
let hack2 = "";
for (let i = 0; i < lenMin; i++){
    hack1 += hacker1[i].toUpperCase();
    hack2 += hacker2[i].toUpperCase();
    console.log(hack1, hack2);
    if (hack1 < hack2) {
        console.log("The driver's name goes first.");
        break;
    }
    else if (hack1 > hack2) {
        console.log("Yo, the navigator goes first definitely.");
        break;
    }
    else {
        continue;
    }
} 

if (hack1 === hack2 && hacker1.length > hacker2.length) {
    console.log("Yo, the navigator goes first definitely.");
}
else if (hack1 === hack2 && hacker1.length < hacker2.length) {
    console.log("The driver's name goes first.");
} else {
    console.log("What?! You both have the same name?");

}

// bonus 1

function paragraphWords(paragraph) {
    let cpt = 1;
    for (let i = 0; i < paragraph.length; i++){
        if (paragraph[i] === " " || paragraph[i] === "\n") {
            cpt += 1;
        }

    }
    return cpt;
}

function paragraphEt(paragraph) {
    let cpt = 0;
console.log(paragraph.length )
    for (let i = 0; i < paragraph.length; i++) {
        if (i === 0 && paragraph[i].toUpperCase() === "E" && paragraph[i+1].toUpperCase() === "T") {
            cpt += 1;
        } else if(i === paragraph.length-1 && paragraph[i-2].toUpperCase() === "T" && paragraph[i-3].toUpperCase() === "E" ){
            cpt += 1;
            console.log(i);
        }
        else if ((paragraph[i].toUpperCase() === "E" && paragraph[i - 1] === " ") && (paragraph[i + 1].toUpperCase() === "T" && paragraph[i+2] === " ")) {
            cpt += 1;
        }
    }
    return cpt;
}

console.log(paragraphWords("je suis walid.\net Guillaume."));

console.log(paragraphEt(" je suis assis et debout et allonget.\nCependant je vois les etoiles et."))