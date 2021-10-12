const prices = [9.99, 1.50, 9.90, 1.00, 49.90,50.99 ]

//sum

/* let total=0;
for (let price of prices) {
    total += price
}
console.log(total) */

/* const total = prices.reduce((total,price)=>{
    return total + price
}) */

// find Max
const max = prices.reduce((max, price)=>{
    if(price>max){
        return price;
    }
    return max
})

const movies = [
    {
        year:1990,
        title: 'Amadeus',
        score: 99
    },
    {
        year:1996,

        title: 'Stand By Me',
        score: 85
    },
    {
        year:2018,

        title: 'Parasite',
        score: 95
    },
    {
        year:2010,

        title: 'Alien',
        score: 90
    }
]
/* const highestRated = movies.reduce((bestMovie,movie)=>{
    if(movie.score > bestMovie.score){
        return movie;
    }
    return bestMovie;
}) */

// using param
/* const highestRated = movies.filter(({score})=> score >=90)
 */
const bestMovie = movies.map(movie=> {
    return `${movie.title} (${movie.year}) is rated ${movie.score}`
})


// this ES6
var cat = {
    name: 'Neko',
    tasks: ['pounce in/out boxes', 'eat fish', 'scratch'],
    showTasks() {
      this.tasks.forEach((task) => {
        alert(this.name + " wants to " + task);
      });  
    }
  };

  // this ES5

  var dog = {
    name: 'Inu',
    tasks: ['be cuddled' , 'have bones', 'walk'],
    showTasks: function() {
      this.tasks.forEach(function(task) {
        alert(this.name + " wants to " + task);
      }.blind(this));  
    }
  };