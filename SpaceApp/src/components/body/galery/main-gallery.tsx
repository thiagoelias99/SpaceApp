import styled from 'styled-components'
import { Foto } from '../../../App'
import Title from '../title'
import MainGalleryCard from './main-gallery-card'

const MainGalleryContainer = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    gap: 24px;
`

const CardContainer = styled.ul`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 24px;
`

interface MainGalleryProps {
    fotos: Foto[]
}

export default function MainGallery({ fotos }: MainGalleryProps) {
    return (
        <MainGalleryContainer>
            <Title title="Navegue pela Galeria" />
            <CardContainer>
                {fotos.map(foto => {
                    return (
                        <MainGalleryCard foto={foto} />
                    )
                })}
            </CardContainer>
        </MainGalleryContainer>
    )
}