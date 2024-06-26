export interface IRegalo {
    regalo: Regalo
}

export type Regalo = {
    id: string
    name: string
    image: string
    available: string
    urls: string[]
    userID?: string
    user?: {
        id: string
        fullName: string
        phone: string
    }
}