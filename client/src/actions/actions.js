import axios from 'axios';

import { VIDEOGAMES_URL, GAMES_ID, VIDEOGAMES_GENEROS, VIDEOGAMES_NOMBRE, VIDEOGAMES_TOTAL } from '../utils/constants';

export const getGames = () => async (dispatch) => {
    try{
        const juegos = await axios.get(VIDEOGAMES_URL);
        dispatch({
            type:'GET_GAMES',
            payload : juegos.data,
        })
    }catch(error){
        console.log(error);
    }
}

export const getTotal = () => async (dispatch) => {
    try{
        const total = await axios.get(VIDEOGAMES_TOTAL);
        dispatch({
            type: 'GET_TOTAL',
            payload: total.data
        })
    }catch(error){
        console.log(error);
    }
}

export const get_Genres = () => async (dispatch) => {
    try{
        const genres = await axios.get(VIDEOGAMES_GENEROS);
        dispatch({
            type: 'GET_GENRES',
            payload: genres.data,
        })
    }catch(error){
        console.log(error)
    }
}

export const getName = (name) => async (dispatch) => {
    try{
        const getname = await axios.get(`${VIDEOGAMES_NOMBRE}name=${name}`);
        dispatch({
            type:'GET_NAME',
            payload: getname.data
        })
    }catch(error){
        console.log(error)
    }
}

export const getDetail = (id) => async (dispatch) => {
    try{
        const detail = await axios.get(GAMES_ID+id);
        dispatch({
            type: 'GET_DETAIL',
            payload: detail.data
        })
    }catch(error){
        console.log(error)
    }
}

export const getViews = (page) => async (dispatch) => {
    dispatch({
        type: 'GET_VIEWS',
        payload: {
            page: page.page,
            max: page.max,
            min: page.min,
        }
    })

}

//aca vamos a setear

export const setGenres = (genre) => (dispatch) => {
    dispatch({
        type: 'SET_GENRES',
        payload: genre,
    })
}

export const setOrder = (order) => (dispatch) => {
    dispatch({
        type : 'SET_ORDER',
        payload: order,
    })
}

export const setType = (type) => ( dispatch) => {
    dispatch({
        type: 'SET_TYPE',
        payload: type
    })
}

