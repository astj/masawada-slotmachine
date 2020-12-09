import Head from "next/head";
import React from "react";
import { Footer } from "../Footer";

export type LayoutProps = Readonly<{
  renderSlot: () => React.ReactElement;
  renderShare?: () => React.ReactElement;
}>;

export const Layout: React.FC<LayoutProps> = ({ renderSlot, renderShare }) => {
  return (
    <div>
      <Head>
        <title>masawada slot 2 result!!!</title>
      </Head>
      <h1>masawada slot!!2</h1>
      <hr />
      {renderSlot()}
      {renderShare && renderShare()}
      <hr />
      <Footer />
    </div>
  );
};
