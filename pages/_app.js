import { SessionProvider } from "next-auth/react";
import "../styles/globals.css";
import Navbar from "components/Navbar";

function MyApp({ Component, pageProps }) {
  return (
    <SessionProvider session={pageProps.session}>
      <Navbar>
        <Component {...pageProps} />
      </Navbar>
    </SessionProvider>
  );
}

export default MyApp;
