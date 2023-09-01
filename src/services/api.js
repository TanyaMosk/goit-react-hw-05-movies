import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3'

const defaultParams = {
    api_key: '52a05da305441484ac0612c66e97b178',
    language: 'en-US',
}
// список трендів на сьогодні
export async function fetchTrending(){
    const response = await axios.get('/trending/all/day', { params: { ...defaultParams } });
//     console.log(response.data);
    return response.data;
}
// Запит повної інформації про фільм
export async function fetchMovieById(id) {   
        const response = await axios.get(`/movie/${id}`, { params: { ...defaultParams } });
        // console.log(response.data);
        return response.data;    
}
// Запит інформації про акторський склад
export async function fetchMovieCastById(id) {   
        const response = await axios.get(`/movie/${id}/credits`, { params: { ...defaultParams } });
        // console.log(response.data);
        return response.data;    
}
// Запит оглядів
export async function fetchMovieReviewsById(id) {   
        const response = await axios.get(`/movie/${id}/reviews`, { params: { ...defaultParams } });
        // console.log(response.data);
        return response.data;    
};

export async function fetchSearchMovieByName(query) {
    const response = await axios.get(`/search/movie`, {
            params: {
            ...defaultParams,   
            query: query,             
        }
        });
        // console.log(response.data);    
        return response.data;
}

