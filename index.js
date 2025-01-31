let countEl = document.getElementById("count-el");

let count = 0;

function increment() {
    count += 1;
    countEl.textContent = count;
}

function save() {
let countStr = countEl.innerText + "-"

document.getElementById("save-el").textContent += countStr

}
