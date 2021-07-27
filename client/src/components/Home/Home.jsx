import React from 'react';
import Card from './Card';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getGames } from '../../actions/actions';
import style from './Home.module.css'
import {Cargando} from './Cargando'
export function Home () {
    const dispatch = useDispatch();
    const juegos = useSelector( state => state.gamesViews.now);
    const tipoJuego = useSelector(state => state.tipoJuego);

    useEffect(() => {
        dispatch(getGames())
    }, [dispatch]);

    const handleSubmit = (el) => {
        dispatch(getGames(el.target.value))
    }

    return(
        <div className={style.base}>
        {
            tipoJuego === 'Search' ?
            <>
            <button value={'All'} onClick={handleSubmit} className={style.salir}>
            {'< Salir'}
            </button>
            <div className={style.cards}>
                {
                    juegos && juegos.map((juego,i)=>{
                        return <Card key={i}
                        id={juego.id}
                        name={juego.name}
                        genres={juego.genres}
                        image={juego.image}
                        />
                    })
                }
            </div>
        </>
                :    
                <>
            <div className={style.cards}>
                {
                    juegos && juegos.map((juego,i)=>{
                        return <Card key={i}
                        id={juego.id}
                        name={juego.name}
                        genres={juego.genres}
                        image={juego.image}
                        />
                    })
                }
            </div>
        </>
        }
        
        </div>
    )
}