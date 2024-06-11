import axios from "axios"
import { atom, atomFamily, selector } from "recoil"


export const userinformation = atom({
    key : "Userinformation",
    default : {}
})

export const Notes = atom({
    key: "Notes",
    default: selector({
        key: "Noteselector",
        get: async () => {
            try {
                const token = localStorage.getItem("token")
                const res = await axios.get("http://localhost:3000/home/notes", {
                    headers: {
                        Authorization: token
                    }
                });
                return res.data.notes;
            } catch (error) {
                console.error("Error fetching notes:", error);
                throw error;
            }
        }
    })
});

export const Trash = atom({
    key : "Trash",
    default : selector({
        key : "trashselecter",
        get :async ()=>{
            try{
                const token = localStorage.getItem("token")
                const res = await axios.get("http://localhost:3000/home/trash", {
                    headers: {
                        Authorization: token
                    }
                });
                return res.data.trash;
            }
            catch(error){
                throw error;
            }
        }
    })
})

// export const navigateto = atom({
//     key : "navigateto",
//     default: "home"
// })