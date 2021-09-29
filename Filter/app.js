const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

numbers.filter(n => {
    return n < 10
})


const movies = [
    {
        title: 'Amadeus',
        score: 99,
        year: 1984,
        type:['Romance' ,'Classic'],
    },
    {
        title: 'Sharknado',
        score: 35,
        year: 2013,
        type:'Comedy',

    },
    {
        title: '13 Going On 30',
        score: 70,
        year: 2004,
        type:'Romance' ,

    },
    {
        title: 'Stand By Me',
        score: 85,
        year: 1986,
        type:['Comedy','Advanture']

    },
    {
        title: 'Waterworld',
        score: 62,
        year: 1995,
        type:['Classic','Adventure']

    },
    {
        title: 'Jingle All The Way',
        score: 71,
        year: 1996,
        type:['Classic','Adventure']

    },
    {
        title: 'Parasite',
        score: 95,
        year: 2019,
        type:'Crime'

    },
    {
        title: 'Notting Hill',
        score: 77,
        year: 1999,
        type:['Classic','Romance']

    },
    {
        title: 'Alien',
        score: 90,
        year: 1979,
        type:['Sci-Fi','Adventure']

    }
]



const badMovies = movies.filter(m => m.score < 70)

const myFavMovies = movies.filter(n=> n.type = 'Classic')

/* const recentMovies = movies.filter(m => m.year > 2000)
 */
// const goodMovies = movies.filter(m => m.score > 80)
// const goodTitles = goodMovies.map(m => m.title)

/* movies.filter(m => m.score > 80).map(m => m.title);
 */