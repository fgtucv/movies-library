    // {
    //   "adult": false,
    //   "backdrop_path": null,
    //   "genre_ids": [18, 35],
    //   "id": 448772,
    //   "title": "A Great Love",
    //   "original_language": "it",
    //   "original_title": "Un grande amore",
    //   "overview": "Two couples meet at a spa when they realize their respective suites share a bathroom.",
    //   "popularity": 5.9185,
    //   "poster_path": "/jZolzsQj3zPINjmGuNuIA6iZPZG.jpg",
    //   "release_date": "1995-01-01",
    //   "softcore": false,
    //   "video": false,
    //   "vote_average": 5,
    //   "vote_count": 5
    // }

export const FilmItem = ({film}) => {
        return (
        <li>
            <img src={`https://image.tmdb.org/t/p/w500${film.poster_path}`} alt="" />
            <h3>{film.title}</h3>
            <p>{film.title}</p>
        </li>
    )
}