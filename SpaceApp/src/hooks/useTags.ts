import { useEffect, useState } from 'react'
import { Tag } from '../model/Tag'

const useTags = () => {
    const [tags, setTags] = useState<Tag[]>([])

    useEffect(() => {
        fetch('http://localhost:3001/tags')
            .then(response => response.json())
            .then(data => {
                setTags(data)
            })
    }, [])

    return tags
}

export default useTags