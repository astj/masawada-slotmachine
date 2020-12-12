import React from "react";
import { SlotmachinePresenter } from "./Presenter";
import { SlotmachineContainer, SlotmachineContainerProps } from "./Container";

export type SlotmachineProps = Omit<
  SlotmachineContainerProps,
  "renderPresenter" | "symbols" | "expected"
>;
export const Slotmachine: React.FC<SlotmachineProps> = (props) => {
  return (
    <SlotmachineContainer
      {...props}
      expected={["ma", "sa", "wa", "da"]}
      renderPresenter={(props) => <SlotmachinePresenter {...props} />}
    />
  );
};
