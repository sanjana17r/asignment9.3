//combining the given arrays to a single array.
var evens = [2, 4, 6, 8];
var odds = [1, 3, 5, 7];
//...........using spread operator for the following..............
var primes = [2, 3, 5, 7, 11];
var array1 = [...primes,...evens,...odds];//array 1 has combined array of primes,evens and odds arrays.
console.log(array1);

//copying the given array to another array

var [...array2] = primes;//contents of primes got copied to array2
console.log(array2);

//................deconstructuring of the following......................
//destructuring below objects to variables
var jamesBond = {
    first: 'James',
    last: 'Bond',
    country: 'United States',
    city: 'New york',
    twitter: '@jamesbond'
};

var {first,last,country,city,twitter}=jamesBond;//the objects are deconstructed into variables as shown
console.log(first);//prints james
console.log(last);//prints bond
console.log(country);//prints united states
console.log(city);//prints new york
console.log(twitter);//prints @jamesbond

//deconstructing array into strings
var players = ['paul', 'andy', 'darrell', 'jim'];
var [player1,player2,player3,player4] = players;
console.log(player1)//prints paul
console.log(player2)//prints andy
console.log(player3)//prints darrell
console.log(player4)//prints jim