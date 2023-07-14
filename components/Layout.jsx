import Head from "next/head";
import React from "react";
import { Header } from "./index";

export default function Layout({ children }) {
  return (
    <React.Fragment>
      <Head>
        <title>Kalai Portfoilo </title>
        <meta
          name="description"
          content="This is the port folio website developed by Kalai using Next JS and Tailwind CSS."
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        />
        <link
          rel="icon"
          href="/favicon/favicon.png"
        />
      </Head>
      <Header />
      <div className="overflow-x-hidden">{children}</div>
      
    </React.Fragment>
  );
}
