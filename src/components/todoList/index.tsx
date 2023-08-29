import React, {useState } from "react";
import './style.sass'
import itemTodoList from "../itemTodoList";


const List = () => {
    
    const [list, setList] = useState<string[]>([])
    const [value, setValue] = useState('')

    const handleClick = () => {
        setList(prev => [...prev, value])
        
        setValue('');
    }
    const handleKeyDown = (event: React.KeyboardEvent) => {
        if (event.key === 'Enter')
            handleClick()
    }

    return (
        <>
            <input type="text" value={value} onKeyDown={handleKeyDown} onChange={e => setValue(e.target.value)}/>
            <button onClick={handleClick}>add</button>
            <div id="list">
                {list.map( x => itemTodoList(x))}
            </div>
        </>
    )
}

export default List