import styled from 'styled-components'
import { Foto } from '../../../App'
import Title from '../title'
import MainGalleryCard from './main-gallery-card'

const MainGalleryContainer = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
`

const CardContainer = styled.ul`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    padding: 0;
    margin: 0;
    gap: 16px;
`

interface MainGalleryProps {
    fotos: Foto[]
    setFoto: (foto: Foto) => void
}

export default function MainGallery({ fotos, setFoto }: MainGalleryProps) {
    return (
        <MainGalleryContainer>
            <Title title="Navegue pela Galeria" />
            <CardContainer>
                {fotos.map(foto => {
                    return (
                        <MainGalleryCard foto={foto} setFoto={setFoto}/>
                    )
                })}
            </CardContainer>
        </MainGalleryContainer>
    )
}