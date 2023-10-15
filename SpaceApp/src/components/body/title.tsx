import styled from 'styled-components'

const StyledTitle = styled.h2<{ align?: string }>`
    color: #7B78E5;
    font-size: 32px;
    text-align: ${props => props.align ? props.align : 'left'};
    `

interface TitleProps {
    title: string
    align?: string
}

export default function Title({ title, align }: TitleProps) {
    return (
        <StyledTitle align={align}>{title}</StyledTitle>
    )
}


