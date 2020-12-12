import React, { useCallback } from "react";
import { SlotView } from "./View";
import { MasawadaSymbol } from "../types";

export type SlotPresenterProps = Readonly<{
  symbol: MasawadaSymbol;
  state: "rolling" | "stopped";
  onClick: () => void;
}>;

export const SlotPresenter: React.FC<SlotPresenterProps> = ({
  symbol,
  state,
  onClick: _onClick,
}) => {
  const onClick = useCallback(() => {
    if (state === "rolling") {
      _onClick();
    }
  }, [_onClick, state]);
  return <SlotView symbol={symbol} onClick={onClick} />;
};
