import {useRouter} from "next/router";
import {useEffect, useState} from "react";
import Head from "next/head";
import Layout from "../../components/Layout";
import Title from "../../components/Title";
import Subtitle from "../../components/Subtitle";
import Session from "../../components/Session";
import EnterUsername from "../../components/EnterUsername";

export default function JoinPage() {
    const router = useRouter();
    const { sessionId } = router.query;

    return (
        <div>
            <Head>
                <title>Quick Session | {sessionId}</title>
            </Head>

            <Layout>
                <Title />
                <Subtitle text={`Enter username to join ${sessionId}`} />
                <EnterUsername type={"Join"} />
            </Layout>
        </div>
    )
}