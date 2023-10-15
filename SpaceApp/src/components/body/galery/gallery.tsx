import styled from 'styled-components'
import Tags from './tags'
import MainGallery from './main-gallery'
import PopularGallery from './popular-gallery'
import { Foto } from '../../../App'

const GalleryContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    `
interface GaleryProps {
    fotos: Foto[]
}

export default function Galery({ fotos }: GaleryProps) {
    return (
        <div>
            <Tags />
            <GalleryContainer>
                <MainGallery fotos={fotos}/>
                <PopularGallery/>
            </GalleryContainer>
        </div>
    )
}