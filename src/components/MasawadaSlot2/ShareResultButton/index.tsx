import React, { FC } from "react";
import { useRouter } from "next/router";
import { StoppedSlots } from "../Slotmachine";
import { TweetButton } from "../TweetButton";

type ShareResultButtonProps = {
  readonly result?: StoppedSlots;
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
          "slots2.html",
          ...result,
        ].join("/")}`
      : window.location.href;
  return result !== undefined ? (
    <TweetButton
      message={transformResult(result)}
      url={url}
      hashtags={["masawadaslot"]}
    />
  ) : null;
};
