import { useRecoilValueLoadable, useSetRecoilState } from "recoil";
import { Notes, Trash } from "../recoil/atoms";
import { FaTrash, FaTrashRestore } from "react-icons/fa";
import { useState } from "react";
import { TiDelete } from "react-icons/ti";
import axios from "axios";

export function ShowTrash(){
    const Trashloadable = useRecoilValueLoadable(Trash)
    const [isactive,setisActive]  = useState(null)
    const settrash = useSetRecoilState(Trash)
    const setnote = useSetRecoilState(Notes)

    const handetrash = async ()=>{
        const token = localStorage.getItem("token")
        const id = isactive;
        console.log(id)
        try{
            const res = await axios.post("http://localhost:3000/home/deleteforever",{ id: id }, 
            { headers: { Authorization: token }})
            settrash(trash => trash.filter(t => t.id !== id))
        }catch(error){
            alert("We are coming to arrest you ")
        }
    }
    const handelrestore = async (title, note)=>{
        const token = localStorage.getItem("token")
        const id = isactive;
        console.log(id)
        try{
            const res = await axios.post("http://localhost:3000/home/restore",{ id: id }, 
            { headers: { Authorization: token }})
            settrash(trash => trash.filter(t => t.id !== id))
            setnote((prevnote) => [...prevnote, {title : title,
                text : note, _id: id}])
        }catch(error){
            alert("We are coming to arrest you ")
        }
    }

    if (Trashloadable.state === "loading") {
        return <div>Loading...</div>;
    }

    if(Trashloadable.state === "hasValue"){
        const trash = Trashloadable.contents;
        return ( 
            <div className="flex flex-col items-center justify-center w-other h-menu overflow-y-auto">
            <div className="flex w-96 justify-between items-center">
            <h2 className="my-12 font-semibold">Notes in Trash are deleted after 7 days.</h2>
            <h2 className="hover:bg-green-50 text-blue-500 font-semibold w-24 p-1 rounded-md cursor-pointer">Empty trash</h2>
            </div>
            <div className="grid grid-cols-4 gap-8 overflow-y-auto home ">
                {trash.map((trash) => (
                    <div  onMouseEnter={() => setisActive(trash.id)} onMouseLeave={() => setisActive(null)} key={trash.id} className="bg-white rounded-lg shadow-md p-4 w-56  shadow-lg border border-slate-600 shadow-inner">
                        <h2 className="text-lg font-semibold mb-2">{trash.title}</h2>
                        <p className="text-gray-700">{trash.text}</p>
                        <div className="h-4 my-2 text-xs">
                        {isactive === trash.id && (
                        <div className="">
                            <button className="" onClick={handetrash}><TiDelete className="mr-2"/></button>
                            <button className="" onClick={()=>{handelrestore(trash.title,trash.text)}}><FaTrashRestore className="mr-2"/></button>
                        </div>
                        )}    
                        </div> 
                    </div>
                ))}
            </div>
            </div>
        );
    }

    if (Trashloadable.state === "hasError") {
        return <div>Error: Unable to load notes.</div>;
    }

    return null;
}