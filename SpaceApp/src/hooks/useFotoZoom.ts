import { useRecoilValue, useSetRecoilState } from "recoil"
import { foto2 } from "../state/atom"
import { Foto } from "../model/Foto"

const useFotoZoom = () => {
    const setFotoZoom = useSetRecoilState<Foto | undefined>(foto2)
    const foto = useRecoilValue(foto2)
    
    function setFoto(foto: Foto | undefined) {
        setFotoZoom(foto)
    }

    return {foto, setFoto}
}

export default useFotoZoom