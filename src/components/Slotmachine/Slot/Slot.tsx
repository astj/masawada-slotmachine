import React from "react";
import { SlotPresenter } from "./Presenter";
import { SlotContainer, SlotContainerProps } from "./Container";

export type SlotProps = Omit<SlotContainerProps, "renderPresenter">;
export const Slot: React.FC<SlotProps> = (props) => {
  return (
    <SlotContainer
      {...props}
      renderPresenter={(props) => <SlotPresenter {...props} />}
    />
  );
};
