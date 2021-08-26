import React, { ChangeEventHandler, FC } from "react";

export type RefreshRateFrame = 1 | 6 | 10;

const parseValue = (x: string): RefreshRateFrame | undefined => {
  switch (x) {
    case "1":
      return 1;
    case "6":
      return 6;
    case "10":
      return 10;
    default:
      return undefined;
  }
};

export interface RefreshRateInputProps {
  readonly refreshRateFrame: RefreshRateFrame;
  readonly onChangeRefreshRate: (newValue: RefreshRateFrame) => void;
}

const frames: RefreshRateFrame[] = [1, 6, 10];

const difficulty: Record<RefreshRateFrame, string> = {
  1: "げきムズ",
  6: "ふつう",
  10: "やさしい",
};

export const RefreshRateInput: FC<RefreshRateInputProps> = (props) => {
  const handleRadio: ChangeEventHandler<HTMLInputElement> = (event) => {
    const v = parseValue(event.target.value);
    if (v !== undefined) {
      props.onChangeRefreshRate(v);
    }
  };
  return (
    <>
      <div>
        難易度
        {frames.map((frame) => (
          <label key={frame}>
            <input
              defaultChecked={props.refreshRateFrame === frame}
              type="radio"
              name="refreshRateFrame"
              value={frame}
              onChange={handleRadio}
            />
            {difficulty[frame]} ({frame}F)
          </label>
        ))}
      </div>
    </>
  );
};
