import React, { useCallback, useEffect, useRef, useState } from "react";
import { SlotPresenterProps } from "./Presenter";

export type SlotContainerProps = Readonly<{
  symbols: readonly string[];
  initialIndex: number;
  state: "rolling" | "stopped";
  onStop: (newIndex: number) => void;
  renderPresenter: (props: SlotPresenterProps) => React.ReactElement;
}>;

export const SlotContainer: React.FC<SlotContainerProps> = ({
  symbols,
  initialIndex,
  state,
  onStop,
  renderPresenter,
}) => {
  const interval = useRef<ReturnType<Window["setInterval"]> | undefined>(
    undefined
  );
  const [index, setIndex] = useState<number>(initialIndex);
  const indexRef = useRef<number>(initialIndex);
  useEffect(() => {
    indexRef.current = index;
  }, [index]);
  const setNextIndex = useCallback(() => {
    let nextIndex = indexRef.current + 1;
    if (nextIndex >= symbols.length) {
      nextIndex = 0;
    }
    setIndex(nextIndex);
    //    indexRef.current = nextIndex;
  }, [symbols]);

  useEffect(() => {
    if (state === "rolling") {
      interval.current = window.setInterval(() => {
        setNextIndex();
      }, 100);
    }
    return () => {
      if (interval.current) {
        window.clearInterval(interval.current);
      }
    };
  }, [setNextIndex, state]);
  const stop = () => {
    window.clearInterval(interval.current);
    onStop(index);
  };
  return renderPresenter({
    symbol: symbols[index],
    onClick: stop,
    state,
  });
};
