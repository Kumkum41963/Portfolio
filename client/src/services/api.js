import axios from 'axios'

console.log('ENV:', import.meta.env)
console.log("API URL:", import.meta.env.VITE_API_URL)
console.log("API LOCAL URL:", import.meta.env.VITE_API_URL)

const client = axios.create({
    baseURL: import.meta.env.VITE_API_URL 
    // headers: {
    //     'Content-Type': 'multipart/form-data'
    // }
})



export const api = {
    admin: {
        uploadResume: (formData) => { return client.post('/sarkare', formData) },
        getAdminStats: () => client.get('/sarkare/stats'),
        urlAction: (action) => client.post(`/sarkare/${action}`), // view, print, download
    },
    contact: {
        send: (data) => client.post('/contact', data),
        // getAll: () => client.get('/contact')
    },
    test: {
        get: () => client.get('/test')
    }
}