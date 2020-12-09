import React from "react";
import { Img } from "../../../Img";
import { MasawadaSymbol } from "../types";
type SlotViewProps = Readonly<{
  symbol: MasawadaSymbol;
  onClick?: () => void;
}>;

export const SlotView: React.FC<SlotViewProps> = ({ symbol, onClick }) => {
  return (
    <Img
      src={`/images/${symbol}.png`}
      onClick={onClick}
      width="50%"
      height="50%"
    />
  );
};
