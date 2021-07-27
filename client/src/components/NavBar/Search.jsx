import { getName } from "../../actions/actions";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
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
        <>
        <link href="//maxcdn.bootstrapcdn.com/font-awesome/4.1.0/css/font-awesome.min.css" rel="stylesheet"></link>
        <div className={style.bus}>
            <form className={style.form}  onSubmit={el => handleSubmit(el) }>
                <span className={style.icon}><i class="fa fa-search"></i></span>
                <input className={style.inp} type='text' placeholder='Search...' onChange={(el) => handleChange(el)} />
            </form>
        </div>
        </>
    )
}

export default Search;