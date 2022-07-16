import Head from 'next/head'
import Title from "../components/Title";
import JoinSession from "../components/JoinSession";
import Divider from "../components/Divider";
import CreateSession from "../components/CreateSession";
import Layout from "../components/Layout";
import Subtitle from "../components/Subtitle";

export default function Home() {
  return (
    <div>
        <Head>
            <title>Quick Session</title>
        </Head>


        <Layout>
            <Title />
            <Subtitle text={"Join or create free, quick session!"} />
            <JoinSession />
            <Divider />
            <CreateSession />
        </Layout>
    </div>
  )
}
