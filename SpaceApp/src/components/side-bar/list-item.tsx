import styled from "styled-components";

interface ListItemProps {
    text: string;
    activeIcon?: string;
    inactiveIcon?: string;
    isActive?: boolean;
}

const StyledListItem = styled.li<{ $isActive: boolean; }>`
    display: flex;
    width: 212px;
    align-items: center;
    gap: 10px;
    padding: 4px 0;
    cursor: pointer;
    transition: 0.5s;

    &:hover {
        background-color: #0B1B3D;
        border-radius: 0.5rem;
    }

    img {
        width: 32px;
    }

    p {
        font-size: 24px;
        font-weight: ${ props => props.$isActive ? 700 : 400};
        color: ${ props => props.$isActive ? '#7B78E5' : '#D9D9D9'};
;
    }
`

function ListItem({ activeIcon, inactiveIcon, text, isActive = false }: ListItemProps) {
    return (
        <StyledListItem $isActive={isActive}>
            <img src={isActive ? activeIcon : inactiveIcon} />
            <p>{text}</p>
        </StyledListItem>
    )
}

export default ListItem