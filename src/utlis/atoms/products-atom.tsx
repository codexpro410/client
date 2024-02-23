import { atom } from "@mongez/react-atom";
import { ServicesProps } from "../types/service-type";

export const productsAtom = atom<ServicesProps[]>({
    key:"products",
    default:[],
})