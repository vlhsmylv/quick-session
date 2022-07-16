import {useRouter} from "next/router";
import {useEffect, useState} from "react";
import Head from "next/head";
import Layout from "../../components/Layout";
import Title from "../../components/Title";
import Subtitle from "../../components/Subtitle";
import Session from "../../components/Session";

export default function SessionPage() {
    const router = useRouter();
    const { sessionId } = router.query;

    const [username, setUsername] = useState('');

    async function getUsernameFromSession() {
        if(typeof window !== "undefined") {
            if(window.sessionStorage.getItem("username") === null) {
                router.push("/");
            } else {
                setUsername(window.sessionStorage.getItem("username"))
            }
        }
    }

    useEffect(() => {
        getUsernameFromSession()
    }, [])

    return (
        <div>
            <Head>
                <title>Quick Session | {sessionId}</title>
            </Head>

            <Layout>
                <Title />
                <Subtitle text={`Joined as ${username}`} />
                <Session sessionId={sessionId} />
            </Layout>
        </div>
    )
}