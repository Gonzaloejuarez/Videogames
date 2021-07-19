import style from './Create.module.css';
import axios from 'axios'
import { get_Genres } from '../../actions/actions';
import { GAMES_ID, IMAGEN, imgDefault } from '../../utils/constants';
import  React , {useState, useEffect } from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {Validate} from '../../metodos/metodos'


export const  CreateVG = () => {
    const dispatch = useDispatch()
    const getGenres = useSelector(state => state.gamesGenres);
    const [error, setError] = useState({})
    const [alert, setAlert] = useState({error: false, create:false})
    const [typePlatform, setTypePlatform] = useState([]);
    const [typeGenre, setTypeGenre] = useState([]);
    const [input , setInput] = useState({
        name : '',
        description : '',
        released : '',
        rating : '',
        image : imgDefault,
        genre:'',
        genres: [],
        platforms:[],
    })
    const plataformas= [
        {
            platform:{
                id:1,
                name:'PC'
            }
        },
        {
            platform:{
                id:2,
                name:'Apple MacIntosh'
            }
        },
        {
            platform:{
                id:3,
                name:'Xbox'
            }
        },
        {
            platform:{
                id:4,
                name:'Nintendo'
            }
        },
        {
            platform:{
                id:5,
                name:'PlayStation'
            }
        },
        {
            platform:{
                id:6,
                name:'Linux'
            }
        }
    ];
     useEffect(()=>{
        dispatch(get_Genres());
    },[dispatch]); 

    useEffect(() => {
        setError(Validate(input))
    }, [input])

    useEffect(() => {
        if (!Object.keys(error).length) {
            setAlert({...alert, errors: false});
        }
    }, [error]);

    useEffect(()=>{
        if(typeGenre.length){
            let total = getGenres.reduce((acc,el)=>{
                if(typeGenre.includes(el.name) === true){
                    acc.push(el.id)
                }
                return acc;
            },[]);
            setInput({...input, genres:total});
        }
    },[typeGenre]);

    const handleGonza = (e) => {
        let id = e.target.id;
        let valor = e.target.value;
        setInput({...input, [id] : valor})
    }
    const handleFormulario =(e) => {
        e.preventDefault();
        if(Object.keys(error).length)
            setAlert({...alert, error:true});
        handleSubmit(input);
    }
    const handleSubmit = async (e) => {
        try{
            await axios.post(GAMES_ID, e);
            setAlert({...alert, create:true});
        }catch(error){
            console.log(error)
        }
    }

    const handleImage=(e)=>{
        setInput({...input, image: e.target.value})
    };

    const handlePlatform=(e)=>{
        setInput({...input, platforms: [...input.platforms,{platform: {name: e.target.value}}]});
        handleShowPlatform(e);
    };

    const handleShowPlatform=(e)=>{
        if(input.platforms.length<4){
            if(!typePlatform.includes(e.target.value)){
                setTypePlatform([...typePlatform, e.target.value]);
            }
        } else setTypePlatform([e.target.value])
    };

    const handleGenres=(e)=>{
        if(input.genres.length<4){
            if(!typeGenre.includes(e.target.value)){
                setTypeGenre([...typeGenre, e.target.value]);
            }
        } else setTypeGenre([e.target.value])
    };





   return (
       <div className={style.todo}>
           <div>
                <h1>Crea tu VideoJuego</h1>
            </div>
           <div className={style.s}>
                <form onSubmit={ e => handleFormulario(e)} className={style.contenido}>
                    <div className={style.image}>
                   { alert.error ? (
                            <div>
                                <ul>
                                    {
                                        Object.values(error).map(el=>(
                                            <li key={el}>{el}</li>
                                        ))
                                    }
                                </ul>
                            </div>
                        ) : null
                   }
                   <div className={style.aparte}>
                        <img className={style.img} src={input.image}/>
                        <select className ={style.select}onChange={e=>handleImage(e)}>
                            {IMAGEN &&
                                IMAGEN.map((el,i)=>(
                                    <option key={i} value={el.imagen}>
                                        Imagen {i+1}
                                    </option>
                                ))
                            }
                        </select>
                    </div>
                    </div>
                    <div className={style.formulario}>
                    <div className={style.nombre}>
                        <label>Nombre</label>
                        <input id='name' type="text" placeholder='Escriba nombre' 
                        value={input.name} onChange={e => handleGonza(e) }/>
                    </div>
                    <div className={style.nombre}>
                        <label>Descripcion</label>
                        <input id='description'type="text" placeholder='Escriba una descripcion'
                        value={input.description} onChange={e => handleGonza(e) }/>
                    </div>
                    <div className={style.nombre}>
                        <label>Rating</label>
                        <input id='rating' type="number"
                        value={input.rating} onChange={e => handleGonza(e) }/>
                    </div>
                    <div className={style.nombre}>
                        <label>Fecha de Lanzamiento</label>
                        <input id='released' type="date"
                        value={input.released} onChange={e => handleGonza(e) }/>
                    </div>
                    <div className={style.nombre}>
                        <label>Plataformas</label>
                        <select id='plataforms' /* value={input.platforms} */ onChange={e => handlePlatform(e)} 
                        onClick={e => handleGonza(e) }>
                            {
                                plataformas && plataformas.map((p,i)=>(
                                    <option key={i} value={p.platform.name}>{p.platform.name}</option>
                                ))
                            }
                        </select>
                        {typePlatform &&
                            typePlatform.map((p,i)=>(
                                <div key={i} className='generos-add'>
                                    <label className='generos-add'>{p}</label>
                                </div>
                            ))
                        }
                    </div>
                    <div className={style.nombre}>
                        <label>Genero</label>
                        <select id='genre' 
                        onChange={e => handleGenres(e)} onClick={e => handleGonza(e) }>
                            {
                                getGenres && getGenres.map((g, i) => (
                                    <option key={i} value={g.name}>{g.name}</option>
                                ))
                            }
                        </select>
                        {typeGenre &&
                            typeGenre.map((el, i) => (
                                <div key={i} >
                                    <label >{el}</label>
                                </div>
                            ))
                        }
                        <button onClick={e => setInput({...input, genres : [...input.genres, 
                             getGenres.filter(e => 
                             e.name === input.genre
                            )] 
                          })
                        }>Agregar</button>
                        
                    </div>
                    </div>
                </form>
           </div>
       </div>
   )
}
export default CreateVG;