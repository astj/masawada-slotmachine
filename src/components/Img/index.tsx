import React from "react";
import * as nextConfig from "../../../next.config";

type ImgProps = JSX.IntrinsicElements["img"];

/**
 * <img> alternative, which considers `basePath` entry in next.config.js
 * @param props same as <img>
 */
export const Img: React.FC<ImgProps> = (props) => {
  const basePath = nextConfig.basePath; // see assetPrefix if nextConfig has it
  const src =
    props.src != undefined && props.src.startsWith("/")
      ? `${basePath}${props.src}`
      : props.src;
  return <img {...props} src={src} />;
};
