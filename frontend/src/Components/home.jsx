import { useEffect } from "react";
import { Menu } from "./menu";
import { useVerify } from "./Verify";
import { AddNote } from "./addnote";
import { ShowNotes } from "./shownote";

export function Home(){
    useEffect(()=>{
        useVerify()
    },[])
    return (
        <div className="flex flex-col items-center justify-center w-other">
            <AddNote></AddNote>
            <ShowNotes></ShowNotes>
        </div>
    )
}