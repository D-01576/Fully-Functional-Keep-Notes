import { atom } from "recoil"

export const CurentUrl = atom({
    key : "CurrentUrl",
    default : ""
})

export const userinformation = atom({
    key : "Userinformation",
    default : {}
})