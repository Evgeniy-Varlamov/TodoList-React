import {useContext} from "react";
import {Context} from "../../context";
import './TodoFilter.css'


export function TodoFilter (filter: any) {
    const { selectFilter } = useContext<any>(Context)
    return (
        <label className='filter'>
            <input type="radio"
                   className="filter-check hide"
                   name='filter'
                   defaultChecked={filter.checked}
                   onChange={()=>{selectFilter(filter.text)}}
            />
            <span className='filter-text'>{filter.text}</span>
        </label>
    )
}