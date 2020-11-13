const a = 1 + 1;
console.log(a);
console.log("sorena".repeat(2));
console.log(console);
console.log(document);
const ul = document.createElement("ul");
for (let i = 0; i < 360; i++) {
    const li = document.createElement("li");
    li.textContent = i.toString();
    li.style.backgroundColor = `hsl(${i}, 100%, 50%)`;
    ul.appendChild(li);
}
document.body.appendChild(ul);