// DATA
let number = 5.5;
const string = "kirjutan 879698 ><<>>siia lause";
const boolean = true; // false

const array = [1, 6, 3, 2, "ösalfhj sadöofdoöhuhu", [6, 45, 2]];
const object = {
  key: "value",
  nimi: "Krister",
  kool: "polükas",
};
const complex = [{ a: 3 }, { a: 8 }];

console.log(object["nimi"]);
console.log(array[0]);
console.log(complex[1]["a"]);
const a = complex[1]["a"];

// CONTROL STRUCTUES

if (number < 10) {
  console.log("TRUE!");
} else {
  console.log("FALSE!");
}

for (const item of array) {
  console.log("LOOP! " + item);
}

function functionName(name) {
  console.log("Hello, " + name);
}
functionName("Krister");
functionName("Maria");
functionName("Whodis");

// READY FUNCTIONS
// fetch data from the internet
async function getMessages() {
  const url = "https://kool.krister.ee/chat/TA24B";
  const response = await fetch(url);
  const data = await response.json();
  console.log(data);
}
getMessages();

// insert data into HTML
const element = document.querySelector("body");
element.innerHTML = "<h1>" + "tere" + "</h1>";

element.addEventListener("keydown", function (event) {
  console.log(`Key pressed: ${event.key}`);
  console.log(`User input: ${event.target.value}`);
});

// const userName = prompt('Write your name')

fetch("https://your-server-url.com/api/message", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({ message: "...", name: "" }),
});

setInterval(getMessages, 3000);
