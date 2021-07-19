import style from './Videogames.module.css'

export const Card = ({name, description, image, genres, rating, platforms}) => {
    
return(
         <div className={style.card}>
            <div className={style.title_img}>
                <img src={image} alt={name}/>
            </div>
            <div className={style.descript_rating}>
                <h1>{name}</h1>
                <dl className={style.d1}>Descripcion: {description}</dl>
                <p>Rating: {rating}</p>
                <div className={style.plat_genres}>
                    <div className={style.genres}>
                        <p>Generos: </p>
                            {
                                genres && genres.map((el,i)=>{
                                    return <li key={i}>{el.name}</li>
                                })
                            }
                    </div>
                    <div className={style.plat}>
                        <p> Plataformas: </p>
                            {
                                platforms && platforms.map((el,i)=>{
                                    return <li key={i}>{el.platform.name}</li>
                                })
                            }
                    </div>
                </div>
            </div>

        </div>
)
}
export default Card;