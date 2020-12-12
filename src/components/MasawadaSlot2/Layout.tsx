import Head from "next/head";
import React from "react";
import { Footer } from "../Footer";
import { genImageUrl } from "../Img";

export type LayoutProps = Readonly<{
  renderSlot: () => React.ReactElement;
  renderShare?: () => React.ReactElement;
  twitterImagePath?: string;
}>;

export const Layout: React.FC<LayoutProps> = ({
  renderSlot,
  renderShare,
  twitterImagePath,
}) => {
  const pageTitle = "マサワダスロット";
  return (
    <div>
      <Head>
        <title>{pageTitle}</title>
        {twitterImagePath !== undefined && (
          <>
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={pageTitle} />
            <meta
              name="twitter:image"
              content={genImageUrl(twitterImagePath)}
            />
          </>
        )}
      </Head>
      <h1>{pageTitle}</h1>
      <hr />
      {renderSlot()}
      {renderShare && renderShare()}
      <hr />
      <Footer />
    </div>
  );
};
