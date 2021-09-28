const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

const doubles = numbers.map(function (num) {
    return num * 2;
})


const movies = [
    {
        title: 'Amadeus',
        score: 99
    },
    {
        title: 'Stand By Me',
        score: 85
    },
    {
        title: 'Parasite',
        score: 95
    },
    {
        title: 'Alien',
        score: 90
    }
]
/* 
const titles = movies.map(function (movie) {
    return movie.title.toUpperCase();
}) */

//regular
/* const ranking = movies.map(function (movie){
   return `${movie.title} - ${movie.score / 10}`
}) */

//arrow
/* const ranking = movies.map((movie)=>{
    return   `${movie.title} - ${movie.score / 10}`
}) */

//implicity return
/* const ranking = movies.map(movie => (`${movie.title} - ${movie.score / 10}`))
 */

//one-liner implicity
const ranking = movies.map(movie =>`${movie.title} - ${movie.score / 10}`);