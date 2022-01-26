import axios from "axios";

const API_KEY = "f9f2b78b-33a5-4bb1-8984-36609ada0956"

const instance = axios.create({
    withCredentials: true,
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    headers: {
        "API-KEY": API_KEY
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

export const usersAPI = {
    async fetchingUsers(page, search) {
        return await instance.get(`users?count=10&page=${page}&term=${search}`)
    },
    async follow(userId) {
        return await instance.post("follow/" + userId,{})
    },
    async unfollow(userId) {
        return await instance.delete("follow/" + userId)
    }
}

export const profileAPI = {
    async fetchingProfile(userId) {
        return await instance.get("/profile/" + userId)
    },
    async fetchingStatus(userId) {
        return await instance.get("/profile/status/" + userId)
    },
    async updateStatus(status) {
        return await instance.put("/profile/status", {status})
    },
    async updateProfileInfo(profileData) {
        return await instance.put("/profile", {...profileData})
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
