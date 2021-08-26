import React, { useCallback, useRef, useState } from "react";
import { RefreshRateFrame } from "../RefreshRateInput";
import { SlotmachinePresenterProps } from "./Presenter";
import { useSlot } from "./Slot";
import { MasawadaSymbol, masawadaSymbols, Slots, StoppedSlots } from "./types";

export type SlotmachineContainerProps = Readonly<{
  expected: readonly string[];
  onStopped: (result: StoppedSlots) => void;
  renderPresenter: (props: SlotmachinePresenterProps) => React.ReactElement;
}>;

export const SlotmachineContainer: React.FC<SlotmachineContainerProps> = ({
  expected,
  onStopped,
  renderPresenter,
}) => {
  const symbols = masawadaSymbols;
  const isStopped: (slots: Slots) => slots is StoppedSlots = useCallback(
    (slots: Slots): slots is StoppedSlots =>
      slots.length === symbols.length &&
      [...slots].every((s) => s !== undefined),
    [symbols.length]
  );
  const [machineState, setMachineState] = useState<"rolling" | "stopped">(
    "stopped"
  );
  const results = useRef<Slots>([]);
  const checkResult = useCallback(() => {
    const currentResults = results.current;
    if (!isStopped(currentResults)) {
      return;
    }
    console.log(results);
    if (currentResults.join("-") === expected.join("-")) {
      // success!
      window.alert("success!");
    } else {
      window.alert("残念でした！");
    }
    onStopped(currentResults);
    // reset status
    results.current = [];
    setMachineState("stopped");
  }, [expected, isStopped, onStopped]);
  const [refreshRateFrame, setRefreshRateFrame] = useState<RefreshRateFrame>(6);
  // generally we should not call hooks inside conditional statements (symbols.map) to keep orders of hooks called.
  // but here we've been freezed symbols, therefore we can stabilize call order, so I believe this is safe.
  const onStops = symbols.map((_v, i) =>
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useCallback((symbol: MasawadaSymbol) => {
      results.current[i] = symbol;
      checkResult();
    }, [])
  );
  const propsAndStarts = symbols.map((initialSymbol, i) =>
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useSlot({ initialSymbol, onStop: onStops[i] })
  );

  const start = () => {
    setMachineState("rolling");
    propsAndStarts.forEach(({ start }) => start());
  };
  const propss = propsAndStarts.map(({ props }) => props);
  return renderPresenter({
    propss,
    start,
    isRolling: machineState == "rolling",
    refreshRateInputProps: {
      refreshRateFrame: refreshRateFrame,
      onChangeRefreshRate: (newValue) => {
        setRefreshRateFrame(newValue);
      },
    },
  });
};
