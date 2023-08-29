import { Col } from 'react-bootstrap';
import './style.sass'

interface ImageProps {
    src: string
}

export default function Image({ src }: ImageProps) {
    return (
        // <Col xs={12} className='content-col'>
            <div className='content'>
                <img
                    src={src}
                />
                <h1>Café</h1>
                <p>descrição: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce fringilla eu
                    ante quis bibendum. Morbi cursus vestibulum enim a ultrices. Vivamus vitae aliquam risus, facilisis. </p>
                <p>preço: R$ 4,00</p>
            </div>
        // </Col>
    )
}