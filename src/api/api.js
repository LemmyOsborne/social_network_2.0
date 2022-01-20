import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    headers: {
        "API-KEY": "f9f2b78b-33a5-4bb1-8984-36609ada0956"
    }
})

export const authAPI = {
    async fetchingMe() {
        return await instance.get("auth/me")

    }
}