import {config} from '../../config/config.js';

export const SearchImages = (searchTerm) => {
    const url = `${config.searchUrl}?key=${config.apiKey}&cx=${config.cx}&q=${searchTerm}&searchType=${config.searchType}&num=10`;
    return fetch((url), {
        method: 'GET',
    })
    .then(response => response.json())
}
