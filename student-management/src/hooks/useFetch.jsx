// src/hooks/useFetch.js
import { useEffect, useState } from "react";
import axios from "axios";

const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let ignore = false;

    const fetchData = async () => {
      try {
        const response = await axios.get(url);
        if (!ignore) {
          setData(response.data);
        }
      } catch (err) {
        if (!ignore) {
          setError(err);
        }
      } finally {
        if (!ignore) {
          setLoading(false);
        }
      }
    };

    fetchData();

    return () => {
      ignore = true; // Cleanup for component unmount
    };
  }, [url]);

  return { data, loading, error };
};

export default useFetch;
