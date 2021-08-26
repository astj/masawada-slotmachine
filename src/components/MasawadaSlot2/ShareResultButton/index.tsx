import { useRouter } from "next/router";
import React, { FC } from "react";
import { Difficulty } from "../RefreshRateInput";
import { StoppedSlots } from "../Slotmachine";
import { TweetButton } from "../TweetButton";

interface Result {
  readonly slots: StoppedSlots;
  readonly difficulty: Difficulty;
}

type ShareResultButtonProps = {
  readonly result?: Result;
};

function transformResult(result: StoppedSlots): string {
  const katakanizeMap = {
    ma: "マ",
    sa: "サ",
    wa: "ワ",
    da: "ダ",
  } as const;
  return result.map((r) => katakanizeMap[r]).join("→");
}

export const ShareResultButton: FC<ShareResultButtonProps> = ({ result }) => {
  const router = useRouter();
  const url =
    result !== undefined
      ? `${window.location.origin}${[
          router.basePath,
          "slots2",
          ...result.slots,
        ].join("/")}`
      : window.location.href;
  return result !== undefined ? (
    <TweetButton
      // message={transformResult(result.slots)}
      message={`難易度${result.difficulty}でこれを出したよ!: ${transformResult(
        result.slots
      )}`}
      url={url}
      hashtags={["masawadaslot"]}
    />
  ) : null;
};
