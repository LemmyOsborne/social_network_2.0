import axios from "axios";

// const API_KEY = "3663864e92094d329a151c7a7e504e7a"

const instance = axios.create({
    withCredentials: true,
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    headers: {
        "API-KEY": "f9f2b78b-33a5-4bb1-8984-36609ada0956"
    }
})
const axiosNews = axios.create({
    baseURL: "https://api.spaceflightnewsapi.net/v3/"
})

export const authAPI = {
    async fetchingMe() {
        return await instance.get("auth/me")
    },
    async login(loginData) {
        return await instance.post("auth/login", loginData)
    },
    async logout() {
        return await instance.delete("auth/login")
    }

}

export const newsAPI = {
    async fetchingNews(searchTitle) {
        return await axiosNews.get(`articles?title_contains=${searchTitle}`)
    },
    async fetchingDefaultNews() {
        return await axiosNews.get(`articles`)
    }
}
