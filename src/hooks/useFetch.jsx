import { useEffect, useState } from "react";

export const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const controller = new AbortController();

        const fetchData = async () => {
            if (!url) {
                setError("Недійсне API");
                setLoading(false);
                return;
            }

            try {
                setLoading(true);
                setError(null);

                const response = await fetch(url, { signal: controller.signal });

                if (!response.ok) {
                    throw new Error(`Помилка запиту: Status ${response.status}`);
                }

                const result = await response.json();

                setData(result);
            } catch (error) {
                if (error.name !== "AbortError") {
                    setError(error.message || "Помилка завантаження даних");
                }
            } finally {
                setLoading(false);
            }
        }

        fetchData();

        return () => controller.abort();
    }, [url]);

    return { data, error, loading };
}