// ************ Importing hooks from react ************
import { useState } from "react";

// ************ Import toast ************
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

// ************ Import configs ************
import toastConfig from "../config/toast.config";

// ************ Import router ************
import {useRouter} from "next/router";

export default function JoinSession() {
    // ************ Create Router ************
    const router = useRouter();

    const [sessionId, setSessionId] = useState('');

    function joinSession(e) {
        e.preventDefault();
        if(sessionId === "") {
            toast.error("Enter session ID", toastConfig);
        } else {
            router.push(`/join/${sessionId}`);
        }
    }

    return (
        <div style={{
            marginTop: "20px"
        }}>
            <input type="text" placeholder="Enter Session ID..." autoComplete="off" style={{
                padding: "20px",
                outline: "none",
                borderBottomLeftRadius: "30px",
                borderTopLeftRadius: "30px",
                background: "#e5e5e5",
                fontSize: "15px",
                border: "none"
            }}
                   value={sessionId}
                   onChange={(e) => {
                       setSessionId(e.target.value);
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
            }} type="button" value="Join"
                onClick={joinSession}
            />
            <ToastContainer limit={1} />
        </div>
    )
}