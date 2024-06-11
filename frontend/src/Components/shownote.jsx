import { useRecoilValueLoadable } from "recoil";
import { Notes } from "../recoil/atoms";
import { FaTrash } from "react-icons/fa";
import { useState } from "react";

export function ShowNotes() {
    const notesLoadable = useRecoilValueLoadable(Notes);
    const [isactive,setisActive]  = useState("hidden")

    if (notesLoadable.state === "loading") {
        return <div>Loading...</div>;
    }

    if (notesLoadable.state === "hasValue") {
        const notes = notesLoadable.contents;
        return ( 
            <div className="grid grid-cols-4 gap-8 overflow-y-auto home ">
                {notes.map((note) => (
                    <div onMouseEnter={() => setisActive("block")} onMouseLeave={() => setisActive("hidden")} key={note.id} className="bg-white rounded-lg shadow-md p-4 w-56  shadow-lg border border-slate-600 shadow-inner">
                        <h2 className="text-lg font-semibold mb-2">{note.title}</h2>
                        <p className="text-gray-700">{note.text}</p>
                        <div className="">
                            <button className={`${isactive}`}><FaTrash className="mr-2" /></button>
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
