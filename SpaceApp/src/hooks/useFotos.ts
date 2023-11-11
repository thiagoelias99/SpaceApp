import { useRecoilValue } from "recoil"
import { fotos } from "../state/atom"


const useFotos = () => {

    const fotosArray = useRecoilValue(fotos)

    return fotosArray 
    
}

export default useFotos