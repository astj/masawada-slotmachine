import React, { useState } from "react";
import { Layout } from "../../components/MasawadaSlot2/Layout";
import {
  StoppedSlots,
  Slotmachine,
} from "../../components/MasawadaSlot2/Slotmachine";
import { ShareResultButton } from "../../components/MasawadaSlot2/ShareResultButton";

const SlotPage: React.FC = () => {
  const [stoppedSlots, setStoppedSlots] = useState<StoppedSlots | undefined>();
  const onStopped = (slots: StoppedSlots): void => setStoppedSlots(slots);

  return (
    <Layout
      twitterImagePath="/public/thumbnails/masawada.png"
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
