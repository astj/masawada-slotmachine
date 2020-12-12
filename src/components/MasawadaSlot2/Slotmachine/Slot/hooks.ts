import { useCallback, useState } from "react";
import { MasawadaSymbol, masawadaSymbols } from "../types";
import { SlotProps } from "./Slot";

type UseSlotPropsParams = Readonly<{
  initialSymbol: MasawadaSymbol;
  onStop: (symbol: MasawadaSymbol) => void;
}>;

export const useSlot: (
  params: UseSlotPropsParams
) => { props: SlotProps; start: () => void } = ({
  initialSymbol,
  onStop: _onStop,
}) => {
  const symbols = masawadaSymbols;
  const [state, setState] = useState<SlotProps["state"]>("stopped");
  const onStop = useCallback(
    (index: number) => {
      setState("stopped");
      _onStop(symbols[index]);
    },
    [_onStop, symbols]
  );
  const start = useCallback(() => {
    setState("rolling");
  }, []);
  const initialIndex = symbols.findIndex((v) => v === initialSymbol);
  if (initialIndex === -1) {
    throw new Error("initialSymbol not found");
  }
  return {
    props: {
      symbols,
      initialIndex,
      state,
      onStop,
    },
    start,
  };
};
