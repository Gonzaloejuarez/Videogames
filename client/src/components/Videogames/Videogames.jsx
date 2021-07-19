import { getDetail } from "../../actions/actions";
import { Link } from "react-router-dom";
import { useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {Card} from './Card'

import style from './Videogames.module.css';

export const VideoGame= ({match}) => {
    const dispatch = useDispatch();
    const game = useSelector(state => state.gamesDetail)
    const fixed = useRef(match.params.id)

    useEffect(()=> {
        dispatch(getDetail(fixed.current))
    })
    return(
        <div>
            <Link to='/home' className={style.boton}>{'Salir'}</Link>
            {
            <Card 
            key={game.id}
            name={game.name}
            description={game.description}
            rating={game.rating}
            platforms={game.platforms}
            genres={game.genres}
            image={game.image}
            />
            }
        </div>
    )
}
export default VideoGame;