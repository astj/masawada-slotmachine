import React from "react";
import { SlotPresenter } from "./Presenter";
import { SlotContainer, SlotContainerProps } from "./Container";
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
