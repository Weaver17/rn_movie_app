import { useEffect, useState } from "react";

export const useFetch = <T>(
      fetchFunction: () => Promise<T>,
      autoFetch = true
) => {
      const [data, setData] = useState<T | null>(null);
      const [loading, setLoading] = useState(false);
      const [error, setError] = useState<Error | null>(null);

      const fetchData = async () => {
            try {
                  setLoading(true);
                  setError(null);

                  const res = await fetchFunction();
                  setData(res);
            } catch (e) {
                  setError(
                        e instanceof Error
                              ? e
                              : new Error("Something went wrong")
                  );
            } finally {
                  setLoading(false);
            }
      };

      const reset = () => {
            setData(null);
            setError(null);
            setLoading(false);
      };

      useEffect(() => {
            if (autoFetch) {
                  fetchData();
            }
      }, []);

      return { data, loading, error, refetch: fetchData, reset };
};
