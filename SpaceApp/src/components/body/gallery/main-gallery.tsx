import styled from 'styled-components'
import Title from '../title'
import MainGalleryCard from './main-gallery-card'
import { fotos } from '../../../state/atom'
import { useRecoilValue } from 'recoil'

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
    const fotosArray = useRecoilValue(fotos)

    return (
        <MainGalleryContainer>
            <Title title="Navegue pela Galeria" />
            <CardContainer>
                {fotosArray.map(foto => {
                    return (
                        <MainGalleryCard foto={foto}/>
                    )
                })}
            </CardContainer>
        </MainGalleryContainer>
    )
}