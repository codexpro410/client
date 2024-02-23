import { atom, Atom } from "@mongez/react-atom";

export const countAtom: Atom<number> = atom({
  key: "products",
  default: 1,
});

