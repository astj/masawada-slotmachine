import React from "react";

export type SlotPresenterProps = Readonly<{
  symbol: string;
  state: "rolling" | "stopped";
  onClick: () => void;
}>;

export const SlotPresenter: React.FC<SlotPresenterProps> = ({
  symbol,
  state,
  onClick,
}) => {
  return (
    <div>
      <span>{symbol}</span>
      <br />
      <button onClick={onClick} disabled={state === "stopped"}>
        stop
      </button>
    </div>
  );
};
