import Layout from "../components/Layout";
import Header from "../sections/home/Header";
import Learn from "../sections/home/Learn";
import Progress from "../sections/home/Progress";
import Vocabulary from "../sections/home/Vocabulary";

export default function Home() {
  return (
    <Layout>
      <Header />
      <Learn />
      <Progress />
      <Vocabulary />
    </Layout>
  );
}
