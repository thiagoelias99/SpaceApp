import styled from "styled-components"
import SearchBar from "./search-bar"

const StyledHeader = styled.div`
    padding: 24px;
    padding-top: 60px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    img{
        height: 65px;
    }
`

function Header() {
    return (
        <StyledHeader>
            <img src="images/Space App Logo.png\" />
            <SearchBar />
        </StyledHeader>
    )
}

export default Header