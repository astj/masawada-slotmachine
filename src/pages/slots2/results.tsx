import React from "react";
import {
  SlotLayout,
  SlotLayoutProps,
} from "../../components/MasawadaSlot2/Slotmachine/Layout";
import { SlotView } from "../../components/MasawadaSlot2/Slotmachine/Slot";
import { Layout, LayoutProps } from "./Layout";

const SlotPage: React.FC = () => {
  const renderMa: SlotLayoutProps["renderMa"] = () => <SlotView symbol="ma" />;
  const renderSa: SlotLayoutProps["renderSa"] = () => <SlotView symbol="sa" />;
  const renderWa: SlotLayoutProps["renderWa"] = () => <SlotView symbol="wa" />;
  const renderDa: SlotLayoutProps["renderDa"] = () => <SlotView symbol="da" />;
  const renderSlot: LayoutProps["renderSlot"] = () => (
    <SlotLayout
      renderMa={renderMa}
      renderSa={renderSa}
      renderWa={renderWa}
      renderDa={renderDa}
      buttonDisabled={true}
    />
  );

  return <Layout renderSlot={renderSlot} />;
};

export default SlotPage;
