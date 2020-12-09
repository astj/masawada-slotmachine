import React from "react";
import { SlotLayout, SlotLayoutProps } from "./Layout";
import { Slot, SlotProps } from "./Slot";

export type SlotmachinePresenterProps = Readonly<{
  propss: readonly SlotProps[];
  isRolling: boolean;
  start: () => void;
}>;

export const SlotmachinePresenter: React.FC<SlotmachinePresenterProps> = ({
  propss,
  isRolling,
  start,
}) => {
  const renderMa: SlotLayoutProps["renderMa"] = () => <Slot {...propss[0]} />;
  const renderSa: SlotLayoutProps["renderSa"] = () => <Slot {...propss[1]} />;
  const renderWa: SlotLayoutProps["renderWa"] = () => <Slot {...propss[2]} />;
  const renderDa: SlotLayoutProps["renderDa"] = () => <Slot {...propss[3]} />;
  return (
    <SlotLayout
      renderMa={renderMa}
      renderSa={renderSa}
      renderWa={renderWa}
      renderDa={renderDa}
      buttonDisabled={isRolling}
      onButtonClick={start}
    />
  );
};
