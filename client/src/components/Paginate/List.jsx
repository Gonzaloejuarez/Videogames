import style from './Paginate.module.css'

export const List = ({li}) => {
    return(
        <div className={style.li}>
            <ul>
              {li}   
            </ul>
        </div>
    )
}
export default List;