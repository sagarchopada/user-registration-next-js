import "../styles/globals.css";
import "../styles/logInUser.css";
import "../styles/registerUser.css";
import { ApiProvider } from "@reduxjs/toolkit/dist/query/react";
import { apiSlice } from "../api/apiSlice";

function MyApp({ Component, pageProps }) {
  return (
    <ApiProvider api={apiSlice}>
      <Component {...pageProps} />;
    </ApiProvider>
  );
}

export default MyApp;
