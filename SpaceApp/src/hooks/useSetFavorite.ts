import { useSetRecoilState } from 'recoil'
import { Foto } from '../model/Foto'
import { fotos } from '../state/atom'

const useSetFavorite = () => {
    const setFotosArray = useSetRecoilState<Foto[]>(fotos)

    return (id: string) =>{
        setFotosArray(oldList => oldList.map(foto => foto.id === id ? { ...foto, favorita: !foto.favorita } : foto))
    }
}

export default useSetFavorite