// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type MessageSearchsvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function MessageSearchsvgIcon(props: MessageSearchsvgIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 17 16"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M12 1.333H5.333A3.327 3.327 0 002 4.653v4.654a3.327 3.327 0 003.333 3.32h1c.18 0 .42.12.534.266l1 1.327c.44.587 1.16.587 1.6 0l1-1.327a.676.676 0 01.533-.266h1a3.327 3.327 0 003.333-3.32V4.653A3.327 3.327 0 0012 1.333zm-.893 8.354c-.1.1-.227.146-.354.146a.495.495 0 01-.353-.146l-.493-.494a2.47 2.47 0 01-1.354.407 2.47 2.47 0 01-2.466-2.467 2.465 2.465 0 114.527 1.353l.493.494a.503.503 0 010 .707z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default MessageSearchsvgIcon;
/* prettier-ignore-end */
