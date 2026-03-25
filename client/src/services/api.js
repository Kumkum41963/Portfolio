import axios from 'axios'

const client = axios.create({
    baseURL: import.meta.env.VITE_API_URL || import.meta.env.VITE_API_LOCAL_URL,
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