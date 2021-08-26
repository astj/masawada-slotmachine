import React, { useState } from "react";
import { Layout } from "../components/MasawadaSlot2/Layout";
import { Difficulty } from "../components/MasawadaSlot2/RefreshRateInput";
import { ShareResultButton } from "../components/MasawadaSlot2/ShareResultButton";
import {
  Slotmachine,
  StoppedSlots,
} from "../components/MasawadaSlot2/Slotmachine";

const SlotPage: React.FC = () => {
  const [stoppedSlots, setStoppedSlots] = useState<StoppedSlots | undefined>();
  const [difficulty, setDifficulty] = useState<Difficulty | undefined>();
  const onStopped = (slots: StoppedSlots, newDifficulty: Difficulty): void => {
    setStoppedSlots(slots);
    setDifficulty(newDifficulty);
  };

  return (
    <Layout
      twitterImagePath="/thumbnails/masawada.png"
      renderSlot={() => <Slotmachine onStopped={onStopped} />}
      renderShare={() =>
        stoppedSlots && difficulty ? (
          <div style={{ textAlign: "center" }}>
            <ShareResultButton result={{ slots: stoppedSlots, difficulty }} />
          </div>
        ) : (
          <></>
        )
      }
    />
  );
};

export default SlotPage;
