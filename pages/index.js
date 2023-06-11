import Head from "next/head";

import Layout from "../components/Layout";
import Header from "../sections/home/Header";
import Learn from "../sections/home/Learn";
import Progress from "../sections/home/Progress";
import Vocabulary from "../sections/home/Vocabulary";

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>i-Learn</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Learn />
      <Progress />
      <Vocabulary />
    </Layout>
  );
}
