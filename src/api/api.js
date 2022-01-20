import axios from "axios";

const API_KEY = "3663864e92094d329a151c7a7e504e7a"

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

export const newsAPI = {
    async fetchingNews() {
        debugger
        return await axios.get(`https://newsapi.org/v2/everything?q=physics&from=2021-12-20&sortBy=publishedAt&pageSize=10&language=en&apiKey=`+ API_KEY)
    }
}