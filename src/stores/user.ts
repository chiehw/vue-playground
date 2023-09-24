import { defineStore } from "pinia"

export const useUserStore = defineStore("storeUser", {
    state: () => {
        return {
            username: "",
            password: "",
            isLogin: false,
        }
    },
    persist: true
})
