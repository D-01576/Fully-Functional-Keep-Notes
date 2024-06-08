import { useSetRecoilState } from "recoil";
import { CurentUrl } from "../recoil/atoms";

export function SetUrl(){
    const seturl = useSetRecoilState(CurentUrl);
    seturl(window.location.href)
}