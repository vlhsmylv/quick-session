// ************ Import router ************
import {useRouter} from "next/router";

// ************ Import toast ************
import {toast} from "react-toastify";
import toastConfig from "../config/toast.config";

export default function CreateSession() {
    // ************ Create Router ************
    const router = useRouter();

    function createSession(e) {
        e.preventDefault();
        router.push("/create-session");
    }

    return (
        <div>
            <input style={{
                cursor: "pointer",
                borderRadius: "30px",
                border: "none",
                outline: "none",
                padding: "20px",
                fontSize: "15px",
                background: "orange",
                color: "#fff",
                paddingRight: "20px"
            }} type="button" value="Create session" onClick={createSession} />
        </div>
    )
}