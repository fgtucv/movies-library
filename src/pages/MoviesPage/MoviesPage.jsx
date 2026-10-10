import { Container } from "../../components/Container/Container";
import { useFetch } from "../../hooks/useFetch";
import { TrendItem } from "./components/TrendItem/TrendItem.jsx";

const key = import.meta.env.VITE_TMDB_TOKEN;

export const MoviesPage = () => {
    const { data, error, loading } = useFetch(`https://api.themoviedb.org/3/trending/movie/day?api_key=${key}&language=uk-UA`);

    if (loading && !data) {
        return (
            <div>Завантаження...</div>
        )
    }

    if (error) {
        return(
            <div>
                {error}
            </div>
        )
    }

    return (
        <main>
            <Container>
                <ul>
                    {
                        data?.results?.map((trend) => <TrendItem key={trend.id} trend={trend} />)
                    }
                </ul>
            </Container>
        </main>
    )
}