import { unsplashApi } from "./api";

export default async function getPhoto(url: string) {
    const { data } = await unsplashApi.get(url);
    return data;
}