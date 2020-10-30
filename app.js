const name = document.querySelectorAll("#name path");

console.log("Hello world")

console.log(name);

for (let i = 0; i<name.length; i++){
    console.log(`Letter ${i} is ${name[i].getTotalLength()}`);
}