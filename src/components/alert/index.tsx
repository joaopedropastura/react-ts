import { useEffect } from "react";
import './style.sass'


const Alert = (props: any) => {

    useEffect(() => {
        if (props.show) {
            setTimeout(() => {
                props.setShow(false)
            }, 3000)
        }
    }, [props.show])

    if (props.show)
        return (
            <p className="alert">Titulo alterado</p>
        )
    return (<></>)
}

export default Alert