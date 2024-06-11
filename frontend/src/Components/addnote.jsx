import axios from "axios"
import { useEffect, useState } from "react"
import { useSetRecoilState } from "recoil"
import { Notes } from "../recoil/atoms"
import { FaTrash } from "react-icons/fa"

export function AddNote(){
    const [title,settitle] = useState("")
    const [note,setnote] = useState("")
    const setrecoilnote = useSetRecoilState(Notes)
    const [valid,setvalid] = useState("hidden")

    useEffect(()=>{
        if(title !== "" || note !== ""){
            setvalid("block")
        }
        else{
            setvalid("hidden")
        }
    },[title,note])

    const handleclick = ()=>{
        const token = localStorage.getItem("token")
            try{
                const res = axios.post("http://localhost:3000/home/addnote",{
                    title : title,
                    text : note
                },{
                    headers :{
                        Authorization : token
                    }
                })
                setrecoilnote((prevnote) => [...prevnote, {title : title,
                    text : note}]);
                alert("done")
            }
            catch{
                alert("can not")
            }
    }

    const handleclose = ()=>{
        setnote(""),
        settitle("")
    }
    
    return(
        <div className="flex flex-col container mx-auto mt-4 p-6 bg-white rounded-lg shadow-lg border border-slate-600 shadow-inner w-96">
            <input value={title} onChange={(e)=>{
                settitle(e.target.value)
            }} className="outline-none" type="text" placeholder="title"/>
            <input value={note}  onChange={(e)=>{
                setnote(e.target.value)
            }} className="outline-none w-80 h-12" type="text" placeholder="Take a note"/>
            <div className={`${valid} flex justify-between items-center`}>
                <div>
                <button className={``}><FaTrash className="mr-2" /></button>
                </div>
                <div className="flex justify-around w-36">
                    <button className = {`w-16 p-1 rounded-lg shadow-lg border border-slate-600`} onClick={handleclose}>Close</button>
                    <button className = {`w-16 p-1 rounded-lg shadow-lg border border-slate-600`} onClick={handleclick}>addnote</button>
                </div>
            </div>
        </div>
    )
}