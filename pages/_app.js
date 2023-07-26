import "../styles/globals.css";

import { Montserrat, Dela_Gothic_One } from "next/font/google";

import { Amplify } from "aws-amplify";
import config from "../aws-exports";

import { AuthProvider } from "./services/authContext";

Amplify.configure(config);

export const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
});

export default function App({ Component, pageProps }) {
  return (
    <>
      <style jsx global>{`
        html {
          font-family: ${montserrat.style.fontFamily};
        }
      `}</style>
      <AuthProvider>
        <Component {...pageProps} />
      </AuthProvider>
    </>
  );
}
