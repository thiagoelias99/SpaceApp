import usePopularFotos from '../../../hooks/usePopularsFotos'
import Title from '../title'

import styled from 'styled-components'

const ImageContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 16px;
`   

const StyledImg = styled.img`
    width: 212px;
    height: 158px;
    object-fit: cover;
    border-radius: 20px;
`

const StyledButton = styled.button`
    height: 56px;
    width: 100%;
    background-color: transparent;
    cursor: pointer;
    border-color: #C98CF1;
    border-radius: 10px;
    color: #FFFFFF;
    font-weight: 700;
    margin-top: 16px;
    transition: background-color 0.3s ease;
    &:hover {
        background: rgba(217, 217, 217, 0.3);
    }
`

export default function PopularGallery() {
    const fotos = usePopularFotos()

    return (
        <div>
            <Title title="Populares" align='center'/>
            <ImageContainer>
                {fotos.map((foto) => (
                    <StyledImg src={foto.path} alt={foto.alt} key={foto.id} />
                ))}
            </ImageContainer>
            <StyledButton>Ver mais</StyledButton>
        </div>
    )
}