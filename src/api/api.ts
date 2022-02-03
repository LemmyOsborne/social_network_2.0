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
    async login(loginData: any) {
        return await instance.post("auth/login", {...loginData})
    },
    async logout() {
        return await instance.delete("auth/login")
    }

}

export const usersAPI = {
    async fetchingUsers(page: number, search: string) {
        return await instance.get(`users?count=10&page=${page}&term=${search}`)
    },
    async follow(userId: number) {
        return await instance.post("follow/" + userId)
    },
    async unfollow(userId: number) {
        return await instance.delete("follow/" + userId)
    }
}

export const profileAPI = {
    async fetchingProfile(userId: any) {
        return await instance.get("/profile/" + userId)
    },
    async fetchingStatus(userId: any) {
        return await instance.get("/profile/status/" + userId)
    },
    async updateStatus(status: string) {
        return await instance.put("/profile/status", {status})
    },
    async updateProfileInfo(profileData: any) {
        return await instance.put("/profile", {...profileData})
    },
    async updateProfilePhoto(photo: string | Blob) {
        const formData = new FormData()
        formData.append("image", photo)
        return await instance.put("/profile/photo", formData)
    }
}

export const newsAPI = {
    async fetchingNews(searchTitle: string) {
        return await axiosNews.get(`articles?_limit=10&title_contains=${searchTitle}`)
    },
    async fetchingDefaultNews() {
        return await axiosNews.get(`articles?_limit=10`)
    }
}
