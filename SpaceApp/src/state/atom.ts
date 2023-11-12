import { atom } from "recoil"
import fotosJson from "../fotos.json"
import { Foto } from '../model/Foto'
import { Tag } from '../model/Tag'

export const fotos = atom<Foto[]>({
  key: 'fotos',
  default: fotosJson || []
})

export const foto2 = atom<Foto | undefined>({
  key: 'foto2',
  default: undefined
})

export const filterState = atom<Tag>(
  {
    key: 'filter',
    default: { id: 0, titulo: 'Todas' }
  }
)
