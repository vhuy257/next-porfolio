import axios from "axios";

const baseURL = process.env.NEXT_PUBLIC_API_UNSPLASH_URL;

export const unsplashApi = axios.create({
    baseURL: baseURL,
    headers: {
        'Authorization': 'Client-ID ' + process.env.NEXT_PUBLIC_API_UNSPLASH_CLIENT_ID,
        "Accept": "application/json",
        "Content-Type": "application/json",
    },
});