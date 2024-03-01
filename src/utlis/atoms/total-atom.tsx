import { Atom, atom } from "@mongez/react-atom";

export const totalAtom : Atom<number> = atom({
    key:"Total",
    default:0,
})