let array = ["1", "2", "3"];
console.log(array);

let modified = array.map(item => {
    return "Hello : " + item;
});

console.log(modified);
console.log(modified.join(", "));

