import React from "react";
import { useRouter } from "next/router";
import {
  SlotLayout,
  SlotLayoutProps,
} from "../../components/MasawadaSlot2/Slotmachine/Layout";
import { SlotView } from "../../components/MasawadaSlot2/Slotmachine/Slot";
import { Layout, LayoutProps } from "../../components/MasawadaSlot2/Layout";
import {
  MasawadaSymbol,
  masawadaSymbols,
} from "../../components/MasawadaSlot2/Slotmachine/types";
import { GetStaticPaths, GetStaticProps } from "next";

function expandNext(prev: MasawadaSymbol[][]): MasawadaSymbol[][] {
  return prev.flatMap((list) =>
    masawadaSymbols.map((symbol) => [...list, symbol])
  );
}
export const getStaticPaths: GetStaticPaths = async () => {
  const results = expandNext(
    expandNext(expandNext(masawadaSymbols.map((symbol) => [symbol])))
  );
  const paths = results.map((path) => ({ params: { result: path } }));
  return {
    paths,
    fallback: false,
  };
};

// dummy (getStaticProps is necessary when getStaticPaths are used)
export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {},
  };
};

const SlotPage: React.FC = () => {
  const router = useRouter();
  const { result: _result } = router.query;
  const result = (_result ?? ["ma", "sa", "wa", "da"]) as MasawadaSymbol[];

  const renderMa: SlotLayoutProps["renderMa"] = () => (
    <SlotView symbol={result[0]} />
  );
  const renderSa: SlotLayoutProps["renderSa"] = () => (
    <SlotView symbol={result[1]} />
  );
  const renderWa: SlotLayoutProps["renderWa"] = () => (
    <SlotView symbol={result[2]} />
  );
  const renderDa: SlotLayoutProps["renderDa"] = () => (
    <SlotView symbol={result[3]} />
  );
  const renderSlot: LayoutProps["renderSlot"] = () => (
    <SlotLayout
      renderMa={renderMa}
      renderSa={renderSa}
      renderWa={renderWa}
      renderDa={renderDa}
      buttonDisabled={true}
    />
  );

  return (
    <Layout
      twitterImagePath={`/public/thumbnails/${result.join("")}.png`}
      renderSlot={renderSlot}
    />
  );
};

export default SlotPage;
