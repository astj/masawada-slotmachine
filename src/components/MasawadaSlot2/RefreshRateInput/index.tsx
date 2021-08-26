import React, { ChangeEventHandler, FC } from "react";

export interface RefreshRateInputProps {
  readonly refreshRate: number;
  readonly onChangeRefreshRate: (newValue: number) => void;
}

export const RefreshRateInput: FC<RefreshRateInputProps> = (props) => {
  const handleChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    props.onChangeRefreshRate(event.target.valueAsNumber);
  };
  return (
    <>
      <label>
        リフレッシュレート
        <input
          type="number"
          value={props.refreshRate}
          onChange={handleChange}
        />
      </label>
    </>
  );
};
