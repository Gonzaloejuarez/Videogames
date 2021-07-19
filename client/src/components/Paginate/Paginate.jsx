import style from './Paginate.module.css'
import List from './List';
import { PAGINAS } from '../../utils/constants';
import { getViews } from '../../actions/actions';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

export const Paginate = () => {
    const dispatch = useDispatch();
    const gamesViews = useSelector(state => state.gamesViews);
    const [paged, setPaged] = useState({page:1 , max:0, min : 0});
    const [paginated, setPaginated] = useState(0);
    let listArray = Array.from({length : paginated}, (e, i) => i+1);

    useEffect(()=>{
        dispatch(getViews(paged))
    },[dispatch, paged]);

    useEffect(() => {
        setPaginated(Math.ceil(gamesViews.all.length / PAGINAS))
    },[gamesViews])

    const handleClick = (e) => {
        setPaged({
            page: e.target.value,
            max : PAGINAS * e.target.value,
            min : PAGINAS * e.target.value - PAGINAS
        })
    }

    /*  useEffect(()=>{
         setPaged({
             page:0,
             max: 15,
             min:0
         })
     },[gamesViews]) */
     console.log(paged)
    return (
        <div className={style.todo}>
            {
            listArray.length ?(
                <div className={style.container}>
                    {listArray && 
                        listArray.map((el,i)=>{
                            return <div key={i} className={style.list_container}>
                                    <List li={
                                        <li
                                            key={i}
                                            className={style.list}
                                            value={el}
                                            onClick={(e)=>handleClick(e)}
                                        >
                                            {el}
                                        </li>
                                    }
                                    />
                            </div>
                        })
                    }
                </div>
            ):null
        }
        </div>
    )
}


export default Paginate;
