import React from 'react'
import { Link } from 'react-router-dom';
import style from './Landing.module.css'
export function Landing () {
    return(
        <div className={style.s}>
            <div className={style.info}>
                <Link to='/home'>
                    <button className={style.boton}>Haz clik aqui</button>
                </Link>
            </div>
        </div>
    )
}

export default Landing;