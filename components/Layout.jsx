import Footer from "./Footer";
import Nav from "./Nav";

import { register } from "swiper/element/bundle";
register();
const Layout = ({ children }) => {
  return (
    <>
      <Nav />
      <div>{children}</div>
      <Footer />
    </>
  );
};

export default Layout;
