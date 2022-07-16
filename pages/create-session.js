import Head from "next/head";
import Layout from "../components/Layout";
import Title from "../components/Title";
import Subtitle from "../components/Subtitle";
import JoinSession from "../components/JoinSession";
import Divider from "../components/Divider";
import CreateSession from "../components/CreateSession";
import EnterUsername from "../components/EnterUsername";

export default function createSession() {
    return (
        <div>
            <Head>
                <title>Quick Session | Create Session</title>
            </Head>


            <Layout>
                <Title />
                <Subtitle text={"Enter your name to create quick session"} />
                <EnterUsername type={"Create"} />
            </Layout>
        </div>
    )
}