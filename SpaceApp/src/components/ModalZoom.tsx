import styled from "styled-components"
import useSetFavorite from '../hooks/useSetFavorite'
import useFotoZoom from "../hooks/useFotoZoom"

const Overlay = styled.div`
    background-color: rgba(0, 0, 0, 0.7);
    position: fixed; 
    top: 0; 
    right: 0;
    bottom: 0;
    left: 0;
`

const StyledDialog = styled.dialog`
  position: absolute;
  top: 100px;
  padding: 0;
  background: none;
  border: none;
`

const StyledFigure = styled.figure`
    width: calc(100vw - 40vw);
    height: 740px;
    max-height: calc(100vh - 40vh);
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    margin: 0;
    `

const StyledImg = styled.img`
    width: 100%;
    height: 100%;
    border-radius: 20px 20px 0 0;
    flex: 1;
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

const StyledCloseButton = styled.button`
    position: absolute;
    top: 0;
    right: 0;
    background-color: transparent;
    border: none;
    cursor: pointer;
`

export default function ModalZoom() {
    const { foto, setFoto } = useFotoZoom()
    const setFavorita = useSetFavorite()

    return (
        <>
            {foto && (
                <Overlay>
                    <StyledDialog open={!!foto}>
                        <StyledFigure>
                            <StyledImg src={foto.path} />
                            <StyledCloseButton onClick={() => setFoto(undefined)}>
                                <StyledImgButton src="/images/close.svg" alt="close" />
                            </StyledCloseButton>
                            <StyledFigcaption>
                                <CaptionContainer>
                                    <StyledTitle>{foto.titulo}</StyledTitle>
                                    <StyledP>{foto.fonte}</StyledP>
                                </CaptionContainer>
                                <StyledButton onClick={() => setFavorita(foto.id)}>
                                    <StyledImgButton src={foto.favorita ? "/images/favorito-ativo.png" : "/images/favorito.png"} alt="favorite" />
                                </StyledButton>
                            </StyledFigcaption>
                        </StyledFigure>
                    </StyledDialog>
                </Overlay>
            )}
        </>
    )
}