import {useRouter} from "next/router";

export default function Session({sessionId}) {
    const router = useRouter();

    async function leave(e) {
        e.preventDefault();
        if(typeof window !== "undefined") {
            await window.sessionStorage.removeItem("username");
        }

        router.push('/');
    }

    return (
        <div style={{
            marginTop: "20px",
            display: "flex",
            flexDirection: "column",
            gap: "20px"
        }}>
            <div style={{textAlign: "center"}}>
                <div style={{
                    marginBottom: "10px"
                }}>
                    Session: {sessionId}
                </div>
                <small style={{marginTop: "10px"}}>Session will be added ASAP</small>
            </div>

            <div style={{
                textAlign: "center"
            }}>
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
                }} type="button" value="Leave" onClick={leave} />
            </div>
        </div>
    )
}