import { useState, useEffect } from 'react';

export default function useFetch(url) {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    const abortController = new AbortController();
    const signal = abortController.signal;

    useEffect(() => {
        setLoading(true);
        setData(null);
        setError(null);

        fetch(url, { signal })

            .then(response => response.json())
            .then(data => {
                if (data.error) {
                    throw data.error;
                }
                setData(data);
                setLoading(false);
            })
            .catch(error => {
                if (error.name !== 'AbortError') {
                    setError(error);
                    setLoading(false);
                }
            });

        return function cleanup() {
            abortController.abort();
        };
    }, [url]);



    return { data, error, loading };
}