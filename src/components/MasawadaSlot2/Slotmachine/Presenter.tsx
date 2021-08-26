import React, { useEffect } from "react";
import { RefreshRateInput, RefreshRateInputProps } from "../RefreshRateInput";
import { SlotLayout, SlotLayoutProps } from "./Layout";
import { Slot, SlotProps } from "./Slot";

export type SlotmachinePresenterProps = Readonly<{
  propss: readonly SlotProps[];
  isRolling: boolean;
  start: () => void;
  refreshRateInputProps: RefreshRateInputProps;
}>;

export const SlotmachinePresenter: React.FC<SlotmachinePresenterProps> = ({
  propss,
  isRolling,
  start,
  refreshRateInputProps,
}) => {
  const { refreshRate } = refreshRateInputProps;
  // start slot on page load
  useEffect(() => {
    start();
  }, []);
  const renderMa: SlotLayoutProps["renderMa"] = () => (
    <Slot {...propss[0]} refreshRate={refreshRate} />
  );
  const renderSa: SlotLayoutProps["renderSa"] = () => (
    <Slot {...propss[1]} refreshRate={refreshRate} />
  );
  const renderWa: SlotLayoutProps["renderWa"] = () => (
    <Slot {...propss[2]} refreshRate={refreshRate} />
  );
  const renderDa: SlotLayoutProps["renderDa"] = () => (
    <Slot {...propss[3]} refreshRate={refreshRate} />
  );
  const renderRefreshRateInput: SlotLayoutProps["renderRefreshRateInput"] = () => (
    <RefreshRateInput {...refreshRateInputProps} />
  );
  return (
    <SlotLayout
      renderMa={renderMa}
      renderSa={renderSa}
      renderWa={renderWa}
      renderDa={renderDa}
      buttonDisabled={isRolling}
      onButtonClick={start}
      renderRefreshRateInput={renderRefreshRateInput}
    />
  );
};
