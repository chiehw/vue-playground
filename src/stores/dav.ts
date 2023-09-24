import { defineStore } from 'pinia'
import { createClient } from 'webdav'

export const useDevclientStore = defineStore('devclient', {
    persist: true,
    state: () => {
        return {
            username: null as string | null,
            password: null as string | null
        }
    },
    getters: {
        client: (state) => {
            if (state.username === null || state.password === null) {
                return null
            } else {
                return createClient(
                    "/api",
                    {
                        username: state.username,
                        password: state.password,
                    }
                )
            }
        },
    },
})

