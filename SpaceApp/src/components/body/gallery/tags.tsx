import styled from 'styled-components'
import useTags from '../../../hooks/useTags'
import useFilter from '../../../hooks/useFilter'

const StyledTagWrapper = styled.div`
    display: flex;
    flex-direction: row;
    gap: 24px;
    align-items: center;
    `

const StyledTitle = styled.h2`
    font-weight: 400;
    font-size: 24px;
    color: #D9D9D9;
    `

const TagContainer = styled.div`
    display: flex;
    flex-direction: row;
    gap: 8px;
    `

const StyledTag = styled.button`
    display: flex;
    height: 48px;
    font-size: 24px;
    color: #FFFFFF;
    background: rgba(217, 217, 217, 0.3);
    border-radius: 10px;
    cursor: pointer;
    transition: border-color 0.3s ease;
    padding: 8px;
    box-sizing: border-box;
    border: 2px solid transparent;
    &:hover {
      border-color: #C98CF1;
    }
    `

export default function Tags() {
    const tags = useTags()
    const { setFilter } = useFilter()


    return (
        <StyledTagWrapper>
            <StyledTitle>Busque por tags:</StyledTitle>
            <TagContainer>
                {tags.map(tag => {
                    return (
                        <StyledTag key={tag.id} onClick={() => setFilter(tag)}>
                            {tag.titulo}
                        </StyledTag>
                    )
                })}
            </TagContainer>
        </StyledTagWrapper>
    )
}