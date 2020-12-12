import Head from "next/head";
import { useRouter } from "next/router";
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
  const router = useRouter();
  const pageTitle = "マサワダスロット";
  const imageFullPath =
    twitterImagePath !== undefined
      ? `https://astj.github.io${genImageUrl(twitterImagePath)}`
      : "";
  return (
    <div>
      <Head>
        <title>{pageTitle}</title>
        <link rel="canonical" href={`${router.basePath}/slot2`} />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content="マ→サ→ワ→ダでマサワダ完成" />
        {twitterImagePath !== undefined && (
          <>
            <meta property="og:image" content={imageFullPath} />
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={pageTitle} />
            <meta name="twitter:image" content={imageFullPath} />
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
