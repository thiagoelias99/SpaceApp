import styled from 'styled-components'
import Title from '../title'
import MainGalleryCard from './main-gallery-card'
import useFilter from '../../../hooks/useFilter'

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

export default function MainGallery() {
    const fotosArray = useFilter().filteredFotos


    return (
        <MainGalleryContainer>
            <Title title="Navegue pela Galeria" />
            <CardContainer>
                {fotosArray.map(foto => {
                    return (
                        <MainGalleryCard key={foto.id} foto={foto}/>
                    )
                })}
            </CardContainer>
        </MainGalleryContainer>
    )
}