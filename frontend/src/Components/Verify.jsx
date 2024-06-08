import { useEffect } from "react";
import axios from "axios";

export function Verify() {
    const token = localStorage.getItem("token");
    useEffect(() => {
        // alert("ok")
        const fetchData = async () => {
            try {
                const response = await axios.get("http://localhost:3000/home/notes", {
                    headers: {
                        authorization: token
                    }
                });
                if (response.data) {
                    window.location.href = "/home";
                }
                else{
                    window.location.href = "/signin";
                }
            } catch (error) {
                console.error("Error:", error);
            }
        };
        fetchData();
    }, [token]);
    console.log(token)
}
