import "../../tailwindcss/style.css";
import Router from "next/router";
import NProgress from "nprogress";
import "nprogress/nprogress.css";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

NProgress.configure({ showSpinner: false }); //showSpiner: false
Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

export default function App({ Component, pageProps }) {
  return (
    <>
      {" "}
      <Component {...pageProps} />
      <ToastContainer position="top-center"></ToastContainer>
    </>
  );
}
