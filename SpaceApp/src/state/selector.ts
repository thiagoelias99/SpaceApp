import { selector } from 'recoil'

export const selectFotos = selector({
    key: 'selectFotos',
    get: async () => {
        const response = await fetch('http://localhost:3001/fotos')
        const data = await response.json()
        return data
    }
})