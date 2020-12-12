import React from "react";
import * as nextConfig from "../../../next.config";

type ImgProps = JSX.IntrinsicElements["img"];

/**
 * <img> alternative, which considers `basePath` entry in next.config.js
 * @param props same as <img>
 */
export const Img: React.FC<ImgProps> = (props) => {
  const src = props.src !== undefined ? genImageUrl(props.src) : undefined;
  return <img {...props} src={src} />;
};

export function genImageUrl(src: string): string {
  const basePath = nextConfig.basePath; // see assetPrefix if nextConfig has it
  return src.startsWith("/") ? `${basePath}${src}` : src;
}
