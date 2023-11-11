import fotosPopulares from './fotos-populares.json'

export interface Foto {
    alt: string
    path: string
    id: number
}

const usePopularFotos = () => {

    return fotosPopulares as Foto[]

}

export default usePopularFotos