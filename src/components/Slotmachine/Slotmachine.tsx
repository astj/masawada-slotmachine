import React from "react";
import { SlotmachinePresenter } from "./Presenter";
import { SlotmachineContainer, SlotmachineContainerProps } from "./Container";

export type SlotmachineProps = Omit<
  SlotmachineContainerProps,
  "renderPresenter"
>;
export const Slotmachine: React.FC<SlotmachineProps> = (props) => {
  return (
    <SlotmachineContainer
      {...props}
      renderPresenter={(props) => <SlotmachinePresenter {...props} />}
    />
  );
};
