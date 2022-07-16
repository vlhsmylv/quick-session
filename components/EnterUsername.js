// ************ Import state ************
import { useState } from "react";

// ************ Import toast ************
import {toast, ToastContainer} from "react-toastify";
import toastConfig from "../config/toast.config";

// ************ Import router ************
import {useRouter} from "next/router";

export default function EnterUsername({type}) {
    const router = useRouter();

    const [username, setUsername] = useState('');

    async function createSession(e) {
        e.preventDefault();
        if(username === "") {
            toast.error("Please enter username", toastConfig);
        } else {
            if(typeof window !== "undefined") {
                await window.sessionStorage.setItem("username", username);

                if(type === "Join") {
                    router.push(`/session/${router.query.sessionId}`);
                } else {
                    router.push(`/session/swaswa`);
                }
            }
        }
    }

    return (
        <div style={{
            marginTop: "20px"
        }}>
            <input type="text" placeholder="Enter username..." autoComplete="off" style={{
                padding: "20px",
                outline: "none",
                borderBottomLeftRadius: "30px",
                borderTopLeftRadius: "30px",
                background: "#e5e5e5",
                fontSize: "15px",
                border: "none"
            }}
                   value={username}
                   onChange={(e) => {
                       setUsername(e.target.value);
                   }}
            />
            <input style={{
                cursor: "pointer",
                borderBottomRightRadius: "30px",
                borderTopRightRadius: "30px",
                border: "none",
                outline: "none",
                padding: "20px",
                fontSize: "15px",
                background: "orange",
                color: "#fff",
                paddingRight: "20px"
            }} type="button" value={type}
                   onClick={createSession}
            />
            <ToastContainer limit={1} />
        </div>
    )
}