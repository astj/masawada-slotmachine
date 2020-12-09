import React, { FC } from "react";

type TweetParameters = {
  readonly message?: string;
  readonly hashtags?: string[];
  readonly url?: string;
};
type TweetButtonProps = TweetParameters;

const formatParameters = (input: TweetParameters): URLSearchParams => {
  const params = new URLSearchParams();
  if (input.message !== undefined) {
    params.set("text", input.message);
  }
  if (input.hashtags !== undefined) {
    for (const ht of input.hashtags) {
      params.append("hashtags", ht);
    }
  }
  if (input.url !== undefined) {
    params.set("url", input.url);
  }
  return params;
};

const buttonCss = {
  backgroundColor: "blue",
  border: "none",
  color: "white",
  padding: "15px 32px",
  textAlign: "center",
  textDecoration: "none",
  display: "inline-block",
  fontSize: "16px",
} as const;
const aCss = {
  color: "white",
  textDecoration: "none",
} as const;

export const TweetButton: FC<TweetButtonProps> = (props) => (
  <button style={buttonCss}>
    <a
      target="_blank"
      rel="noreferrer"
      href={`https://twitter.com/intent/tweet?${formatParameters(props)}`}
      style={aCss}
    >
      Tweet your result
    </a>
  </button>
);
