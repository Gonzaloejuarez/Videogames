import style from './Filter.module.css'
import { setGenres, setOrder, setType } from '../../actions/actions';
import { get_Genres, getGames } from '../../actions/actions';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

export const Filter = () => {
    const dispatch = useDispatch();
    const genres = useSelector(state => state.gamesGenres);

    useEffect(() => {
        dispatch(get_Genres())
    }, [dispatch])

    const handleGenres = (el) => {
        dispatch(setGenres(el.target.value))
    }
    const handleOrder = (el) => {
        dispatch(setOrder(el.target.value))
    }
    const handleType = (el) => {
        dispatch(setType(el.target.value))
    }

    return (
        
        <div className={style.genres}>
            <div className={style.base}>
                    <label for='generos'>Mostrar por Genero</label>
                    <select className={style.sele} name='generos' id='generos' onChange={(e)=> handleGenres(e)}>
                            <option value='All'>-Opciones-</option>
                        {
                            genres && genres.map((el,i)=>(
                                <option key={i} value={el.name}>{el.name}</option>
                            ))
                        }
                    </select>
                </div>
       
                <div className={style.base}>
                    <label for='Order'>Mostrar por Orden</label>
                    <select className={style.sele} name='Order' id='Order' onChange={(e) => handleOrder(e)} >
                        <option value='A-Z'>A-Z</option>
                        <option value='Z-A'>Z-A</option>
                        <option value='Mayor rating'>Mayor Rating</option>
                        <option value='Menor rating'>Menor Rating</option>
                    </select>
                </div>
                <div className={style.base}>
                    <label for='OrderType'>Mostrar por Orden</label>
                    <select className={style.sele} name='OrderT' id='OrderT' onChange={(e) => handleType(e)}>
                        <option value='API'>API</option>
                        <option value='DB'>Creados</option>
                    </select>
                </div>
        
        </div>
    )
}

export default Filter