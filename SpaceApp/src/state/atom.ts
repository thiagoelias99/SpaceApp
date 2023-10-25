import { atom } from "recoil"
import fotosJson from "../fotos.json"
import { Foto } from '../model/Foto'

export const fotos = atom<Foto[]>({
  key: 'fotos',
  default: fotosJson || []
})

export const foto2 = atom<Foto | undefined>({
  key: 'foto2',
  default: undefined
})
