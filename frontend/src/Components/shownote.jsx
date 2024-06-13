import { useRecoilValueLoadable, useSetRecoilState } from "recoil";
import { Notes, Trash } from "../recoil/atoms";
import { FaTrash } from "react-icons/fa";
import { useState } from "react";
import axios from "axios";

export function ShowNotes() {
    const setnote = useSetRecoilState(Notes)
    const notesLoadable = useRecoilValueLoadable(Notes);
    const [isactive,setisActive]  = useState(null);
    const settrash = useSetRecoilState(Trash)
    
    const handetrash = async (title,text)=>{
        const token = localStorage.getItem("token")
        const id = isactive;
        console.log(id)
        try{
            const res = await axios.post("http://localhost:3000/home/delete",{ id: id }, 
            { headers: { Authorization: token }})
            setnote(notes => notes.filter(note => note._id !== id))

            settrash((prestrash) => [...prestrash, {title : title,
                text : text, id: id}])
        }catch(error){
            alert("We are coming to arrest you ")
        }
    }

    if (notesLoadable.state === "loading") {
        return <div>Loading...</div>;
    }

    if (notesLoadable.state === "hasValue") {
        const notes = notesLoadable.contents;
        return ( 
            <div className="grid grid-cols-4 gap-8 overflow-y-auto">
                {notes.map((note) => (
                    <div onMouseEnter={() => setisActive(note._id)} onMouseLeave={() => setisActive(null)} key={note._id} className="bg-white rounded-lg shadow-md p-4 w-56  shadow-lg border border-slate-600 shadow-inner">
                        <h2 className="text-lg font-semibold mb-2">{note.title}</h2>
                        <p className="text-gray-700 w-48 bg-gray-200 break-words max-h-96 overflow-hidden">{note.text}</p>
                        <div className="h-4 my-2 text-xs">
                        {isactive === note._id && (
                        <div className="">
                            <button className=""><FaTrash className="mr-2" onClick={() => handetrash(note.title, note.text)}/></button>

                        </div>
                        )}    
                        </div>   
                    </div>
                ))}
            </div>
        );
    }

    if (notesLoadable.state === "hasError") {
        return <div>Error: Unable to load notes.</div>;
    }

    return null;
}
