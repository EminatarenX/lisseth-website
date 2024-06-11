import axios,{ Axios } from "axios"

export class FetchService {
    private client: Axios
    constructor(){
        this.client = axios.create({
            baseURL: 'http://localhost:3000/api/v1'
        })
    }

    async get(path: string) {
        const response = await this.client.get(path)
        return response.data
    }
    async getAuthorization(path: string, token: string) {
        const response = await this.client.get(path, {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`
            },

        })

        return response.data    
    }

    async post(path: string, data: any) {
        const response = await this.client.post(path, data)

        return response.data
    }

    async postAuthorization(path: string, data: any, token: string) {
        const response = await this.client.post(path, {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`
            },
        }, data)

        return response
    }
}