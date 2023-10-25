import styled from 'styled-components'
import Tags from './tags'
import MainGallery from './main-gallery'
import PopularGallery from './popular-gallery'

const GalleryContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    `
export default function Galery() {
    return (
        <div>
            <Tags />
            <GalleryContainer>
                <MainGallery />
                <PopularGallery/>
            </GalleryContainer>
        </div>
    )
}