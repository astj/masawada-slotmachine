import React from "react";
import { SlotContainer, SlotContainerProps } from "./Container";
import { SlotPresenter } from "./Presenter";
export { SlotView } from "./View";

export type SlotProps = Omit<SlotContainerProps, "renderPresenter" | "symbols">;
export const Slot: React.FC<SlotProps> = (props) => {
  return (
    <SlotContainer
      {...props}
      renderPresenter={(props) => (
        <SlotPresenter {...props} symbol={props.symbol} />
      )}
    />
  );
};
