import React, { FC } from "react";
import { useRouter } from "next/router";
import { StoppedSlots } from "../Slotmachine";
import { TweetButton } from "../TweetButton";

type ShareResultButtonProps = {
  readonly result?: StoppedSlots;
};

export const ShareResultButton: FC<ShareResultButtonProps> = ({ result }) => {
  const router = useRouter();
  const url =
    result !== undefined
      ? `${window.location.origin}${[router.basePath, "slots2", ...result].join(
          "/"
        )}`
      : window.location.href;
  return result !== undefined ? (
    <TweetButton
      message={result.join("→")}
      url={url}
      hashtags={["masawadaslot"]}
    />
  ) : null;
};
