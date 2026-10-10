import { useState } from "react";
import { Container } from "../../components/Container/Container.jsx";
import { useFetch } from "../../hooks/useFetch.jsx";
import { FilmItem } from "./components/FilmItem/FilmItem.jsx";

const key = import.meta.env.VITE_TMDB_TOKEN;

export const HomePage = () => {
    const [value, setValue] = useState(""); 
    const [query, setQuery] = useState("");

    const url = query 
        ? `https://api.themoviedb.org/3/search/movie?api_key=${key}&query=${query}`
        : null;

    const { data } = useFetch(url);

    const clickHandlate = () => {
        setQuery(value);
    };

    return (
        <main>
            <Container>
                <section>
                    <input 
                        value={value} 
                        onChange={(e) => setValue(e.target.value)} 
                        placeholder="Занайди фільм для себе: Інтерстелер..." 
                        type="text" 
                    />
                    <button onClick={clickHandlate} type="button">Знайти</button>
                </section>
                <section>
                    <ul>
                        {data?.results?.map((film) => (
                            <FilmItem key={film.id} film={film}/>
                        ))}
                    </ul>
                </section>
            </Container>
        </main>
    );
};