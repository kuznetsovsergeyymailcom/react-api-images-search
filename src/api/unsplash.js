import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID tnVq053eLKUjgh5YazXIb2LkT5QDEy1h7uyPiaKqm8c'
    }

});