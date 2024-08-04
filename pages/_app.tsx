import store from "@/components/utils/store";
import "../styles/globals.css";
import type { AppProps } from "next/app";
import { useEffect } from "react";
import React from "react";
import { Provider } from "react-redux";

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    if (typeof window !== "undefined") {
      document.documentElement.classList.add("dark");
    }
  }, []);

  return (
    <Provider store={store}>
      <React.StrictMode>
        <Component {...pageProps} />
      </React.StrictMode>
    </Provider>
  );
}

export default MyApp;
