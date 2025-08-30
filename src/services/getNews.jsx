import axios from "axios";

const NEWS_API_BASE_URL = import.meta.env.VITE_NEWS_API_BASE_URL;
const NEWS_API_KEY = import.meta.env.VITE_API_KEY;

console.log("NEWS_API_BASE_URL:", NEWS_API_BASE_URL);
console.log("NEWS_API_KEY:", NEWS_API_KEY ? 'Loaded' : 'Missing');

export const getNews = async ({ searchQuery = 'technology' }) => {
    try {
        const path = '/everything';
        const query = `?q=${searchQuery}&apiKey=${NEWS_API_KEY}`;
        const endpointURL = `${NEWS_API_BASE_URL}${path}${query}`;

        const res = await axios.get(endpointURL);
        if(res.status === 200){
            const additionalObj = {
                category: searchQuery
            }
            const resData = {
                ...res.data,
                ...additionalObj
            }

            return resData;
        }
    } catch (error) {
        console.error("Error fetching news:", error);
        throw error;
    }
}