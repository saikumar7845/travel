import axios from "axios";

// Online My JSON Server (GitHub integration)
export const MY_JSON_SERVER_URL = "https://my-json-server.typicode.com/saikumar7845/travel";

// Localhost JSON Server
export const LOCAL_URL = "http://localhost:3000";

const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL || MY_JSON_SERVER_URL
});

export default api;

