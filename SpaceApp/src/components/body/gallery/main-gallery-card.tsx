import styled from 'styled-components'
import { Foto } from '../../../App'

interface MainGalleryCardProps {
    foto: Foto
    setFoto: (foto: Foto) => void
}

const StyledFigure = styled.figure`
    width: calc(100% / 2 - 16px);
    height: 336px;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    margin: 0;

    @media (max-width: 768px) {
    width: calc(100% - 16px);
  }
    `

const StyledImg = styled.img`
    width: 100%;
    height: 100%;
    max-height: 256px;
    border-radius: 20px 20px 0 0;
    object-fit: cover;
    `

const StyledFigcaption = styled.figcaption`
    background-color: #001634;
    height: 80px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    border-radius: 0 0 20px 20px;
`

const CaptionContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    margin-left: 16px;
`

const StyledTitle = styled.p`
    font-size: 20px;
    font-weight: 700;
    color: #ffffff;
    margin: 0;
`

const StyledP = styled.p`
    font-size: 16px;
    font-weight: 400;
    color: #ffffff;
    margin: 0;
`

const StyledButton = styled.button`
    background-color: transparent;
    border: none;
    cursor: pointer;
`

const StyledImgButton = styled.img`
    width: 24px;
    height: 24px;
    margin: 0 8px;
    fill: #FFFFFF;
    filter: brightness(0) invert(1);
`


export default function MainGalleryCard({ foto, setFoto }: MainGalleryCardProps) {
    return (
        <StyledFigure>
            <StyledImg src={foto.path} />
            <StyledFigcaption>
                <CaptionContainer>
                    <StyledTitle>{foto.titulo}</StyledTitle>
                    <StyledP>{foto.fonte}</StyledP>
                </CaptionContainer>
                <div>
                    <StyledButton>
                        <StyledImgButton src="/images/favorite.svg" alt="favorite" />
                    </StyledButton>
                    <StyledButton onClick={e => setFoto(foto)}>
                        <StyledImgButton src="/images/open-in-full.svg" alt="favorite" />
                    </StyledButton>
                </div>
            </StyledFigcaption>
        </StyledFigure>
    )
}