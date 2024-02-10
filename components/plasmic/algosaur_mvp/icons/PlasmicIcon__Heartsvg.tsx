// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type HeartsvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function HeartsvgIcon(props: HeartsvgIconProps) {
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
          "M11.293 2.067a3.7 3.7 0 00-2.96 1.486 3.7 3.7 0 00-2.96-1.486 3.715 3.715 0 00-3.706 3.726c0 .794.126 1.527.346 2.207 1.054 3.333 4.3 5.327 5.907 5.873.227.08.6.08.827 0 1.606-.546 4.853-2.54 5.906-5.873.22-.68.347-1.413.347-2.207 0-2.06-1.66-3.726-3.707-3.726z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default HeartsvgIcon;
/* prettier-ignore-end */
