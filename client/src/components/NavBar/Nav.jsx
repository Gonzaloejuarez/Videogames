import style from './Nav.module.css'
import { getGames } from '../../actions/actions';
import {useDispatch} from 'react-redux';
import {Link} from 'react-router-dom'
import {Search} from './Search';
import image from '../../images/LOGO_OFF.png';


export const Nav = () => {

    const dispatch = useDispatch()
    const handleSubmit = () => {
        dispatch(getGames())
    }
    return(
        <div className={style.todo}>
            <Link to='/' >
                <img src={image} className={style.volver}></img>
            </Link>
            <div className={style.Inicio}>
                <Link to='/home'>
                    <button onClick={() => handleSubmit()} className={style.boton}>Inicio</button>
                </Link>
            </div>
            <div className={style.s}>
                <Link to='/create'>
                <button className={style.boton}>Crear Juego</button>
                </Link>
            </div>
            <div className={style.buscador}>
                <Search />
            </div>
        </div>
    )

}

export default Nav;