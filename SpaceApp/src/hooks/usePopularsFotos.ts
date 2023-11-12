import { useEffect, useState } from 'react'
import { PopularFoto } from '../model/PopularFoto'

const usePopularFotos = () => {

    const [popularFotos, setPopularFotos] = useState<PopularFoto[]>([])

    useEffect(() => {
        fetch('http://localhost:3001/populars')
            .then(response => response.json())
            .then(data => setPopularFotos(data))
    }, [])

    return popularFotos
}

export default usePopularFotos