import { atom } from "recoil"
import { Foto } from '../model/Foto'
import { Tag } from '../model/Tag'
import { selectFotos } from './selector'

export const fotos = atom<Foto[]>({
  key: 'fotos',
  default: selectFotos
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
