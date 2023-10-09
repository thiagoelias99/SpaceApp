import styled from "styled-components"

const Container = styled.div`
    width: 602px;
    height: 56px;
    padding: 12px 16px;
    border-radius: 10px;
    border: 2px solid var(--Degrad-com-rosa, #C98CF1);

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`

const Input = styled.input`
    height: 56px;
    padding: 12px 16px;
    border-radius: 10px;
    border: none;
    background: transparent;
    box-sizing: border-box;
    width: 566px;
    color: #D9D9D9;
    font-weight: 400;
    font-size: 20px;
    line-height: 20px;
`

const Logo = styled.img`
    width: 32px;
    height: 32px;
`

function SearchBar() {
    return (
        <div>
            <Container>
                <Input type="text" placeholder="O que você procura?" />
                <Logo src="images/search.svg" />
            </Container>
        </div>
    )
}

export default SearchBar