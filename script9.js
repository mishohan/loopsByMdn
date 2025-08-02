const people = [
  "Chris",
  "Anne",
  "Colin",
  "Terri",
  "Phil",
  "Lola",
  "Sam",
  "Kay",
  "Bruce",
];

const invited = document.querySelector(".invited");
const refused = document.querySelector(".refused");

for(let i = 0; i < people.length; i++){
    if(people[i] === "Phil" || people[i] === "Lola"){
        refused.textContent += ` ${people[i]}, `;
    }
    else if(i === people.length - 1){
        invited.textContent += ` ${people[i]}.`;
    }
    else{
        invited.textContent += ` ${people[i]}, `;
    }
}