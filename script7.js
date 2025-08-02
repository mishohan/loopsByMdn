const cats = ['Pete', 'Biggles', 'Jasmine'];

let myFavoriteCats = "My cats are called ";

let i = 0;

//while

while(i < cats.length) {
    if(i === cats.length - 1){
        myFavoriteCats += `and ${cats[i]}.`;
    }
    else{
        myFavoriteCats += `${cats[i]}, `;
    }
    i++;
}
console.log(myFavoriteCats); // My cats are called Pete, Biggles, and Jasmine.


//do...while

const kitties = ['Pete', 'Biggles', 'Jasmine'];

let myFavoritekitties = "My cats are called ";

let j = 0;
do{
    if(j === kitties.length - 1){
        myFavoritekitties += `and ${kitties[j]}.`;
    }
    else{
        myFavoritekitties += `${kitties[j]}, `;
    }
    j++
} while( j < kitties.length);

console.log(myFavoritekitties);