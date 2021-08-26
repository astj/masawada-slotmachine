import React, { useState } from "react";
import { Layout } from "../components/MasawadaSlot2/Layout";
import { ShareResultButton } from "../components/MasawadaSlot2/ShareResultButton";
import {
  Slotmachine,
  StoppedSlots,
} from "../components/MasawadaSlot2/Slotmachine";

const SlotPage: React.FC = () => {
  const [stoppedSlots, setStoppedSlots] = useState<StoppedSlots | undefined>();
  const onStopped = (slots: StoppedSlots): void => setStoppedSlots(slots);

  return (
    <Layout
      twitterImagePath="/thumbnails/masawada.png"
      renderSlot={() => <Slotmachine onStopped={onStopped} />}
      renderShare={() =>
        stoppedSlots ? (
          <div style={{ textAlign: "center" }}>
            <ShareResultButton result={stoppedSlots} />
          </div>
        ) : (
          <></>
        )
      }
    />
  );
};

export default SlotPage;
