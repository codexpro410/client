import { atom } from "@mongez/react-atom";

export const totalAtom = atom<number>({
    key:"Total",
    default:0,
})