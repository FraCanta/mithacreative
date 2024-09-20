import React from "react";
import { useRouter } from "next/router";
import { Toaster } from "react-hot-toast";
import Footer from "./Footer";
import Navbar from "./Navbar";

const Layout = (props) => {
  const router = useRouter();

  const noLayoutPages = ["/inizia-il-progetto"];
  const showLayout = !noLayoutPages.includes(router.pathname);

  return (
    <>
      <Toaster
        position="bottom-right"
        toastOptions={{
          duration: 3000,
          success: {
            iconTheme: {
              primary: "#5cb4ad",
              secondary: "white",
            },
          },
          error: {
            iconTheme: {
              primary: "red",
              secondary: "black",
            },
          },
        }}
      />
      {showLayout && <Navbar />}
      <main>{props.children}</main>
      {/* {showLayout && <Footer />} */}
    </>
  );
};

export default Layout;
