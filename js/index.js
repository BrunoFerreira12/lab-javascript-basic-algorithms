// Iteration 1: Names and Input

const hacker1 = "bruno";
const hacker2 = "joao";
console.log(`The drivers name is ${hacker1}`);
console.log(`The navigater name is ${hacker2}`);

// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
  console.log(
    `The driver has the longest name, it has ${hacker1.length} characters.`
  );
} else if (hacker1.length < hacker2.length) {
  console.log(
    `It seems that the navigator has the longest name, it has ${hacker2.length} characters.`
  );
} else {
  console.log(
    `Wow, you both have equally long names, ${hacker1.length} characters!`
  );
}

// Iteration 3: Loops

//3.1
let upperCaseHacker1 = "";

for (let i = 0; i < hacker1.length;i++) {
    upperCaseHacker1 += hacker1[i].toUpperCase ()+ " "; //+ " "<- para dar um espaço entre as letras
    //missing spaces
    }
console.log(upperCaseHacker1)

//3.2

let navigatorName = "";

for (let i = hacker2.length - 1; i >= 0; i--) {
    navigatorName += hacker2[i];
 }
console.log(navigatorName);

//3.3
if (hacker1> hacker2)
  console.log("The driver's name goes first");
if (hacker1<hacker2)
  console.log("Yo, the navigator goes first definitely.");
else
  console.log("What?! You both have the same name?");