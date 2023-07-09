import Footer from "./Footer";
import Nav from "./Nav";
import Head from "next/head";
import { register } from "swiper/element/bundle";
register();
const Layout = ({ children }) => {
  return (
    <>
      <Nav />
      <Head>
        <title>i-Learn</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>{children}</div>
      <Footer />
    </>
  );
};

export default Layout;
