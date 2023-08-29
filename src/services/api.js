import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3'

const defaultParams = {
    api_key: '52a05da305441484ac0612c66e97b178',
}

export async function fetchTrending(){

    const response = await axios.get('/trending/all/day', {
        params: {
            ...defaultParams,
            language: 'en-US',
        }
    });
    // console.log(response.data);
    return response.data;
}

export async function fetchMovieById(id) {   
        const response = await axios.get(`/movie/${id}`, {
            params: defaultParams,
        });
        // console.log(response.data);
        return response.data;    
}

export async function fetchMovieCastById(id) {   
        const response = await axios.get(`/movie/${id}/credits`, {
            params: defaultParams,
        });
        console.log(response.data);
        return response.data;    
}
