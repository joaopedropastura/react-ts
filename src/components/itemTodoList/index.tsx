import { useEffect } from "react";
import './style.sass'


const Item = (value: string) => {
    return (
        <p className="item">{value}</p>
    )
}

export default Item