//ex1: for()

const cats = ["Leopard", "Serval", "Jaguar", "Tiger", "Caracal", "Lion"];

for(const cat of cats){
    console.log(cat);
}


//ex2: map()

function toUpper(string){
    return string.toUpperCase();
}

const bigCats = ["Leopard", "Serval", "Jaguar", "Tiger", "Caracal", "Lion"];

const upperCats = bigCats.map(toUpper);
console.log(upperCats); // ['LEOPARD', 'SERVAL', 'JAGUAR', 'TIGER', 'CARACAL', 'LION']


//ex3: filter()

function lCat(cat){
    return cat.startsWith("L");
}

const kitties = ["Leopard", "Serval", "Jaguar", "Tiger", "Caracal", "Lion"];
const filtered = kitties.filter(lCat);

console.log(filtered); // ['Leopard', 'Lion']


//ex4: Function Expression

const wildCats = ["Leopard", "Serval", "Jaguar", "Tiger", "Caracal", "Lion"];

const catsWithL = wildCats.filter((cat) => cat.startsWith('L'));
console.log(catsWithL); // ['Leopard', 'Lion']