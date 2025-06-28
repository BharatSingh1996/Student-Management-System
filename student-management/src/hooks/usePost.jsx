import { useState } from "react";
import axiosInstance from "./axiosInstance";

const usePost = () => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const postData = async (url, payload = {}) => {
        setLoading(true);
        setError(null);
        try {
            const response = await axiosInstance.post(url, payload);
            setData(response.data);
            return response.data; // Optional: return for immediate use
        } catch (err) {
            setError(err);
            console.error("❌ POST Error:", err);
        } finally {
            setLoading(false);
        }
    };

    return { data, loading, error, postData };
};

export default usePost;
