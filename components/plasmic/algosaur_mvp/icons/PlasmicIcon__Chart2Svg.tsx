// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Chart2SvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Chart2SvgIcon(props: Chart2SvgIconProps) {
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
          "M10.793 1.333H5.207c-2.427 0-3.874 1.447-3.874 3.874v5.58c0 2.433 1.447 3.88 3.874 3.88h5.58c2.426 0 3.873-1.447 3.873-3.874V5.207c.007-2.427-1.44-3.874-3.867-3.874zm-4.186 9.46a.775.775 0 01-.78.774.774.774 0 01-.774-.774V8.62c0-.427.347-.773.774-.773.433 0 .78.346.78.773v2.173zm4.34 0a.774.774 0 01-.774.774.775.775 0 01-.78-.774V5.207c0-.427.347-.774.78-.774.427 0 .774.347.774.774v5.586z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Chart2SvgIcon;
/* prettier-ignore-end */
