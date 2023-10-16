import styled from 'styled-components'
import Banner from './banner'
import Galery from './gallery/gallery'
import { Foto } from '../../App'

const StyledBody = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    `

interface BodyProps {
    fotos: Foto[]
    setFoto: (foto: Foto) => void
}

export default function Body({ fotos, setFoto }: BodyProps){
    return(
        <StyledBody>
            <Banner 
            text='A galeria mais completa de fotos do espaço!'
            backgroundImage='images/Banner.png'
            />
            <Galery fotos={fotos} setFoto={setFoto}/>
        </StyledBody>
    )
}