// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type SendsvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function SendsvgIcon(props: SendsvgIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 16 16"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M12.047 5.673L6.34 2.82C2.507.9.933 2.473 2.853 6.307l.58 1.16c.167.34.167.733 0 1.073l-.58 1.153C.933 13.527 2.5 15.1 6.34 13.18l5.707-2.853c2.56-1.28 2.56-3.374 0-4.654zM9.893 8.5h-3.6a.504.504 0 01-.5-.5c0-.273.227-.5.5-.5h3.6c.274 0 .5.227.5.5s-.226.5-.5.5z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default SendsvgIcon;
/* prettier-ignore-end */
