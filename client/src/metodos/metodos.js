import { PAGINAS } from "../utils/constants";
export const views = (array, max, min) => {
    if(!min && !max) {
        return array.slice(0, PAGINAS);
    }
        return array.slice(min, max);
}

export const genres = (type, array) => {
    if(type === 'All')return array;
    let matchgenre = array.filter(el =>{
        for(var i = 0 ; i < el.genres.length ; i++){
            if(el.genres[i].name === type){
                return true
            }
        }
    });
    return matchgenre;
}

export const getOrder = (order, array) => {
    switch (order) {
        case 'API':
            return array.filter((el) => typeof el.id === 'number');
        case 'DB' :
            return array.filter((el) => el.id.toString().length > 35);
        case 'All':
            return array;    
        default:
            return array;
    }
}

export const getType = (type, array) => {
    switch (type) {
        case 'A-Z':
            return array.sort((a, b) => {
                if(a.name > b.name){
                    return 1
                }
                else {
                    return -1
                }
            });
        case 'Z-A':
            return array.sort((a,b) => {
                if(a.name < b.name){
                    return 1
                }
                else{
                    return -1
                }
            });
        case 'Mayor rating':
            return array.sort((a, b) => {
                if(a.rating < b.rating){
                    return 1
                }
                else{
                    return -1
                }
            });
        case 'Menor rating':
            return array.sort((a, b) => {
                if(a.rating > b.rating) {
                    return 1
                }
                else{
                    return -1
                }
            });
        default:
            return array;
         
    }
}


export const Validate = (inputs) => {
    let errors = {}
    if(inputs.name === ''){
        errors.name = 'Nombre es requerido'
    }
    if(inputs.genres[0] === undefined){
        errors.genres = 'Genero es requerido'
    }
    else if(inputs.description === ''){
        errors.description = 'Descripcion es requerido'
    }
    else if(inputs.platforms.length === 0){
        errors.platforms = 'Elegi al menos una plataforma'
    }
    return errors
};
