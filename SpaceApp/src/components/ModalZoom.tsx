import styled from "styled-components"
import { useRecoilValue, useSetRecoilState } from 'recoil'
import { Foto } from "../model/Foto"
import { foto2 } from '../state/atom'
import useSetFavorite from '../hooks/useSetFavorite'

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
    const foto3 = useRecoilValue(foto2)
    const setFotoZoom = useSetRecoilState<Foto | undefined>(foto2)
    const setFavorita = useSetFavorite()
    function setFoto(foto?: Foto) { setFotoZoom(foto) }

    return (
        <>
            {foto3 && (
                <Overlay>
                    <StyledDialog open={!!foto3}>
                        <StyledFigure>
                            <StyledImg src={foto3.path} />
                            <StyledCloseButton onClick={() => setFoto(undefined)}>
                                <StyledImgButton src="/images/close.svg" alt="close" />
                            </StyledCloseButton>
                            <StyledFigcaption>
                                <CaptionContainer>
                                    <StyledTitle>{foto3.titulo}</StyledTitle>
                                    <StyledP>{foto3.fonte}</StyledP>
                                </CaptionContainer>
                                <StyledButton onClick={e => setFavorita(foto3.id)}>
                                    <StyledImgButton src={foto3.favorita ? "/images/favorito-ativo.png" : "/images/favorito.png"} alt="favorite" />
                                </StyledButton>
                            </StyledFigcaption>
                        </StyledFigure>
                    </StyledDialog>
                </Overlay>
            )}
        </>
    )
}