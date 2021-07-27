import { NavLink } from "react-router-dom";
import style from './Home.module.css'

export const Card = ({id, name, genres, image, rating})=> {
    return(
    <> 
        <NavLink to={`/videogame/${id}`} className={style.link}>
            <div key={id} className={style.cartas}>
                <div className={style.s}>
                    <img className={style.img} src={image} alt={name} />
                    <h2 className={style.nombre}>{name}</h2>
                        <div className={style.abajo}>
                            {
                                genres.map((genre, id) => {
                                    return <p key={id} className={style.nails}>{genre.name}</p>
                                })
                            }
                    </div>
                </div>
                <div className={style.rating}>
                    <p>{rating}</p>
                </div>
            </div>
        </NavLink>
    </>
    );
}

export default Card;