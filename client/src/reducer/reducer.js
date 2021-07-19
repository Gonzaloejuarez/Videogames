import { views, genres, getOrder, getType } from '../metodos/metodos';

const initialState = {
 games : [],
 gamesDetail: [],
 gamesGenres:[],
 gameSearch:[],
 gamesViews : {
     all:[],
     now:[],
 },
 gamesFilter : 'All',
 gamesList : 'All',
}


export const reducer = ( state= initialState, {type, payload}) => {
    switch (type) {
        case 'GET_GAMES':
            return{
                ...state,
                games: payload,
                gamesViews:{
                    all: payload,
                    now: views(payload),
                },
                gamesFilter: 'All'
            };
        case 'GET_DETAIL':
            return {
                ...state,
                gamesDetail:payload
            } 
        case 'GET_GENRES':
            return {
                ...state,
                gamesGenres: payload
            }
        case 'GET_NAME':
            return {
                ...state,
                gamesViews:{
                    all: payload,
                    now: payload,
                },
                gamesFilter:'Search'
            }
        case 'SET_GENRES':
            state.gamesViews.all = genres(
                payload,
                getOrder(state.gamesList , state.games)
            )
            return {
                ...state,
                gamesViews:{
                    ...state.gamesViews,
                    now : views(state.gamesViews.all)
                },
                gamesFilter: payload
            }  
        case 'SET_ORDER':
            return{
                ...state,
                gamesViews:{
                    ...state.gamesViews,
                    now: views(
                        getType(payload, state.gamesViews.all)
                    )
                },
                gamesFilter : payload
            }
        case 'SET_TYPE':
            return {
                ...state,
                gamesViews:{
                    ...state.gamesViews,
                    all: getOrder(payload , state.games),
                    now: views(getOrder(payload, state.games))
                },
                gamesList : payload,
                gamesFilter: payload,
            }
        case 'GET_VIEWS' :
             return {
                 ...state, 
                 gamesViews: {
                     ...state.gamesViews,
                     now: views(
                         state.gamesViews.all,
                         payload.max, 
                         payload.min,
                     ),
                 },  
                };
        default:
            return state
    }
}

export default reducer;