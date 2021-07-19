import { getName } from "../../actions/actions";
import { useDispatch } from "react-redux";
import { useState } from "react";
import style from './Nav.module.css'
export const Search = () => {
    const dispatch = useDispatch()
    const [name, setName] = useState('');

    const handleChange = (el) => {
        setName(el.target.value)
        
    }

    const handleSubmit = (el) => {
        el.preventDefault();
        if(name.length){
            dispatch(getName(name))
        }
    }
    
    return (
        <div className={style.bus}>
            <form className={style.form} 
            onSubmit={el => handleSubmit(el)}>
                <input className={style.inp} type='text' placeholder='Busca un juego' onChange={(el) => handleChange(el)}
                />
                <button className={style.button}>Buscar</button>
            </form>
        </div>
    )
}

export default Search;