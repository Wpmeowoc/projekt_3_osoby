

const d = document;

const btnKot = d.querySelector("#b-addition");
const btnPies = d.querySelector("#b-subtraction");
const btnKrolik = d.querySelector("#b-next");
const counterBox = d.querySelector("#counter");
const counterText = counterBox.querySelector("p");
const ageInput = d.querySelector("#age-input");

let value = 0;

const MAX_KOT = 25;
const MAX_PIES = 20;
const MAX_KROLIK = 12;

function render() {
counterText.textContent = value;
}

ageInput.addEventListener("input", () => {
let v = Number(ageInput.value);
if (v < 0) v = 0;
if (v > 100) v = 100;
value = v;
render();
});

btnKot.addEventListener("click", () => {
if (value <= 0) {
    value = "wpisz poprawny wiek";
} else if (value > MAX_KOT) {
    value = `maksymalny wiek kota to ${MAX_KOT} lat`;
} else if (value === 1) value = 15;
else if (value === 2) value = 24;
  else value = 24 + (value - 2) * 4;

render();
});

btnPies.addEventListener("click", () => {
if (value <= 0) {
    value = "wpisz poprawny wiek";
} else if (value > MAX_PIES) {
    value = `maksymalny wiek psa to ${MAX_PIES} lat`;
} else if (value === 1) value = 16;
else if (value === 2) value = 24;
  else value = 24 + (value - 2) * 5;

render();
});

btnKrolik.addEventListener("click", () => {
if (value <= 0) {
    value = "wpisz poprawny wiek";
} else if (value > MAX_KROLIK) {
    value = `maksymalny wiek królika to ${MAX_KROLIK} lat`;
} else if (value === 1) value = 20;
else if (value === 2) value = 30;
  else value = 30 + (value - 2) * 3;

render();
});

render();
