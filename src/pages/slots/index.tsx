import React, { useState } from "react";
import Head from "next/head";
import {
  Slotmachine,
  StoppedSlots,
} from "../../components/MasawadaSlot1/Slotmachine";
import { Footer } from "../../components/Footer";
import { ShareResultButton } from "../../components/MasawadaSlot1/ShareResultButton";

const SlotPage: React.FC = () => {
  const [stoppedSlots, setStoppedSlots] = useState<StoppedSlots | undefined>();
  const onStopped = (slots: StoppedSlots): void => setStoppedSlots(slots);
  const symbols = ["ma", "sa", "wa", "da"] as const;
  // const symbols = ["ma", "sa", "wa", "pa", "pi", "x"] as const;
  const expected = ["ma", "sa", "wa", "da"] as const;

  return (
    <div>
      <Head>
        <title>masawada slot!!!</title>
      </Head>
      <h1>masawada slot!!</h1>
      <hr />
      <Slotmachine
        symbols={symbols}
        expected={expected}
        onStopped={onStopped}
      />
      <ShareResultButton result={stoppedSlots} />
      <hr />
      <Footer />
    </div>
  );
};

export default SlotPage;
