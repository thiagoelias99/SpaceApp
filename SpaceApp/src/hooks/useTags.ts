import tags from '../data/tags.json';
import { Tag } from '../model/Tag'

const useTags = () => {
    return tags as Tag[]
}

export default useTags