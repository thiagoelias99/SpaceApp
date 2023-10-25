import styled from 'styled-components'
import Banner from './banner'
import Galery from './gallery/gallery'

const StyledBody = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    `

export default function Body(){
    return(
        <StyledBody>
            <Banner 
            text='A galeria mais completa de fotos do espaço!'
            backgroundImage='images/Banner.png'
            />
            <Galery />
        </StyledBody>
    )
}