import { useEffect } from "react";
import axios from "axios";
export function useVerify() {
    const token = localStorage.getItem("token");
    // const url = useRecoilValue(CurentUrl);
    // useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get("http://localhost:3000/home/notes", {
                    headers: {
                        authorization: token
                    }
                });
                if (response.data.status === "success") {
                    if(window.location.href === "http://localhost:5173/signin" || window.location.href === "http://localhost:5173/signup"){
                window.location.href = "/home";
                    }
                }
                else{
                    window.location.href = "/signin";
                }
            } catch (error) {
                if(window.location.href === "http://localhost:5173/signin" || window.location.href === "http://localhost:5173/signup"){
                // window.location.href = "/signin";
            }
            else{
                window.location.href = "/signin";
            }
            // alert(window.location.href)
            }
        };
        fetchData();
    console.log(token)
}
