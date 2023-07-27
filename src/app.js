function RandomValue() {
  let values = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K"
  ];
  let finalValue = Math.floor(Math.random() * values.length);
  return values[finalValue];
}

function randomSuit() {
  let suit = ["♦", "♥️", "♠", "♣"];
  let randomSuit = Math.floor(Math.random() * suit.length);
  return suit[randomSuit];
}

let card = document.querySelector("#card");

let finalSuit = randomSuit();
let finalValue = RandomValue();

card.style.color = `${finalSuit == "♦" || finalSuit == "♥️" ? "red" : "black"}`;

let topSuit = document.createElement("div");
card.appendChild(topSuit);
topSuit.style.height = "100px";
topSuit.style.fontsize = "100px";
topSuit.style.paddingleft = "20px";
topSuit.innerHTML = `${finalSuit}`;

let midValue = document.createElement("div");
card.appendChild(midValue);
midValue.style.height = "300px";
midValue.style.fontsize = "150px";
midValue.style.display = "flex";
midValue.style.justifyContent = "center";
midValue.style.alignItems = "center";
midValue.innerHTML = `${finalValue}`;

let bottomSuit = document.createElement("div");
card.appendChild(bottomSuit);
bottomSuit.style.height = "100px";
bottomSuit.style.fontsize = "100px";
bottomSuit.style.paddingleft = "20px";
bottomSuit.style.transform = "rotate(180deg)";
bottomSuit.innerHTML = `${finalSuit}`;
