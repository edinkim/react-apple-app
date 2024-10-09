import axios from 'axios';

const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3",
    params: {
        api_key: "770960cd33d855acf340095fa87a6014",
        language: 'ko-KR'
    }
})

export default instance;