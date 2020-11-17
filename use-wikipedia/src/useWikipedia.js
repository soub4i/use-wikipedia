import { useState, useEffect } from "react";

export function hook(q, limit = 10) {
  const [error, setError] = useState(null);
  const [data, setData] = useState([]);

  const query = async (q, limit = 10) => {
    const response = await fetch(
      `https://en.wikipedia.org/w/api.php?action=query&list=search&prop=info&inprop=url&utf8=&format=json&origin=*&srlimit=${limit}&srsearch=${q}`
    );
    const result = await response.json();

    try {
      if (result.error) {
        setError(result.error);
      }

      if (result.query) {
        const {
          query: { search, searchinfo },
        } = result;
        setData({ search, searchinfo });
      }
    } catch (error) {
      setError(error);
    }

    return {
      data,
      error,
    };
  };

  useEffect(() => {
    query(q, limit);
  }, [q, limit]);

  return {
    query,
    error,
    data,
  };
}
