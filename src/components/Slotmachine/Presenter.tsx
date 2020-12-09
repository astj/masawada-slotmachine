import React from "react";
import { Slot, SlotProps } from "./Slot";

export type SlotmachinePresenterProps = Readonly<{
  propss: readonly SlotProps[];
  isRolling: boolean;
  start: () => void;
}>;

export const SlotmachinePresenter: React.FC<SlotmachinePresenterProps> = ({
  propss,
  isRolling,
  start,
}) => {
  const rowSpanSize = propss.length;
  return (
    <div>
      <table>
        <tbody>
          <tr>
            {propss.map((props) => (
              <td key={props.initialIndex}>
                <Slot {...props} />
              </td>
            ))}
          </tr>
          <tr>
            <td rowSpan={rowSpanSize}>
              <button onClick={start} disabled={isRolling}>
                start!!
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
