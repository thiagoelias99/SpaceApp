import { useRecoilState, useRecoilValue } from 'recoil'
import { filterState, fotos } from '../state/atom'
import { Foto } from '../model/Foto'

const useFilter = () => {    
    const [filter, setFilter] = useRecoilState(filterState)
    const fotos2 = useRecoilValue(fotos)

    const filterFotos = () => {
        if (filter.id === 0) return fotos2
        return fotos2.filter(foto => foto.tagId === filter.id)
    }

    const filteredFotos: Foto[] = filterFotos()

    return { filter, setFilter, filteredFotos }
}

export default useFilter