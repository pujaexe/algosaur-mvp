// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: ew4qcccnQBEWaCZGLSHX1A
// Component: DQ-iGMz_Q_A3

import * as React from "react";

import Head from "next/head";
import Link, { LinkProps } from "next/link";
import { useRouter } from "next/router";

import {
  Flex as Flex__,
  MultiChoiceArg,
  PlasmicDataSourceContextProvider as PlasmicDataSourceContextProvider__,
  PlasmicIcon as PlasmicIcon__,
  PlasmicImg as PlasmicImg__,
  PlasmicLink as PlasmicLink__,
  PlasmicPageGuard as PlasmicPageGuard__,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  Stack as Stack__,
  StrictProps,
  Trans as Trans__,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  ensureGlobalVariants,
  generateOnMutateForSpec,
  generateStateOnChangeProp,
  generateStateOnChangePropForCodeComponents,
  generateStateValueProp,
  get as $stateGet,
  hasVariant,
  initializeCodeComponentStates,
  initializePlasmicStates,
  makeFragment,
  omit,
  pick,
  renderPlasmicSlot,
  set as $stateSet,
  useCurrentUser,
  useDollarState,
  usePlasmicTranslator,
  useTrigger,
  wrapWithClassName
} from "@plasmicapp/react-web";
import {
  DataCtxReader as DataCtxReader__,
  useDataEnv,
  useGlobalActions
} from "@plasmicapp/react-web/lib/host";

import Button from "../../Button"; // plasmic-import: 8giX1KtcjVQY/component

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic_antd_5_hostless.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import projectcss from "./plasmic_algosaur_mvp.module.css"; // plasmic-import: ew4qcccnQBEWaCZGLSHX1A/projectcss
import sty from "./PlasmicContentCard.module.css"; // plasmic-import: DQ-iGMz_Q_A3/css

import MoreActionsvgIcon from "./icons/PlasmicIcon__MoreActionsvg"; // plasmic-import: MnOKxswBKHML/icon
import ChecksvgIcon from "./icons/PlasmicIcon__Checksvg"; // plasmic-import: -130KpeBfD4P/icon
import IconIcon from "./icons/PlasmicIcon__Icon"; // plasmic-import: 24qZhALD5Ijc/icon
import Chart2SvgIcon from "./icons/PlasmicIcon__Chart2Svg"; // plasmic-import: cMq8UZJb80d2/icon
import HeartsvgIcon from "./icons/PlasmicIcon__Heartsvg"; // plasmic-import: 0aygCqYTkOUE/icon
import MessageSearchsvgIcon from "./icons/PlasmicIcon__MessageSearchsvg"; // plasmic-import: U16v4RSuvpKR/icon
import SendsvgIcon from "./icons/PlasmicIcon__Sendsvg"; // plasmic-import: i2HuPZe481FC/icon

createPlasmicElementProxy;

export type PlasmicContentCard__VariantMembers = {
  signalOn: "signalOn";
  imageOn: "imageOn";
};
export type PlasmicContentCard__VariantsArgs = {
  signalOn?: SingleBooleanChoiceArg<"signalOn">;
  imageOn?: SingleBooleanChoiceArg<"imageOn">;
};
type VariantPropType = keyof PlasmicContentCard__VariantsArgs;
export const PlasmicContentCard__VariantProps = new Array<VariantPropType>(
  "signalOn",
  "imageOn"
);

export type PlasmicContentCard__ArgsType = {
  cardTitle2?: React.ReactNode;
  textContent2?: React.ReactNode;
  signalContainer2?: React.ReactNode;
  cardImage2?: React.ReactNode;
  cardToolbar2?: React.ReactNode;
};
type ArgPropType = keyof PlasmicContentCard__ArgsType;
export const PlasmicContentCard__ArgProps = new Array<ArgPropType>(
  "cardTitle2",
  "textContent2",
  "signalContainer2",
  "cardImage2",
  "cardToolbar2"
);

export type PlasmicContentCard__OverridesType = {
  contentCard?: Flex__<"div">;
  cardTitle?: Flex__<"div">;
  textContent?: Flex__<"div">;
  signalContainer?: Flex__<"div">;
  cardImage?: Flex__<"div">;
  cardToolbar?: Flex__<"div">;
};

export interface DefaultContentCardProps {
  cardTitle2?: React.ReactNode;
  textContent2?: React.ReactNode;
  signalContainer2?: React.ReactNode;
  cardImage2?: React.ReactNode;
  cardToolbar2?: React.ReactNode;
  signalOn?: SingleBooleanChoiceArg<"signalOn">;
  imageOn?: SingleBooleanChoiceArg<"imageOn">;
  className?: string;
}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicContentCard__RenderFunc(props: {
  variants: PlasmicContentCard__VariantsArgs;
  args: PlasmicContentCard__ArgsType;
  overrides: PlasmicContentCard__OverridesType;
  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;

  const args = React.useMemo(() => Object.assign({}, props.args), [props.args]);

  const $props = {
    ...args,
    ...variants
  };

  const __nextRouter = useNextRouter();
  const $ctx = useDataEnv?.() || {};
  const refsRef = React.useRef({});
  const $refs = refsRef.current;

  const currentUser = useCurrentUser?.() || {};

  const stateSpecs: Parameters<typeof useDollarState>[0] = React.useMemo(
    () => [
      {
        path: "signalOn",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.signalOn
      },
      {
        path: "imageOn",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.imageOn
      }
    ],
    [$props, $ctx, $refs]
  );
  const $state = useDollarState(stateSpecs, {
    $props,
    $ctx,
    $queries: {},
    $refs
  });

  return (
    <div
      data-plasmic-name={"contentCard"}
      data-plasmic-override={overrides.contentCard}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        plasmic_antd_5_hostless_css.plasmic_tokens,
        sty.contentCard,
        {
          [sty.contentCardimageOn]: hasVariant($state, "imageOn", "imageOn"),
          [sty.contentCardsignalOn]: hasVariant($state, "signalOn", "signalOn")
        }
      )}
    >
      <div
        data-plasmic-name={"cardTitle"}
        data-plasmic-override={overrides.cardTitle}
        className={classNames(projectcss.all, sty.cardTitle)}
      >
        {renderPlasmicSlot({
          defaultContents: (
            <React.Fragment>
              <Stack__
                as={"div"}
                hasGap={true}
                className={classNames(projectcss.all, sty.freeBox__orV6X)}
              >
                <PlasmicImg__
                  alt={""}
                  className={classNames(sty.img___30Uxf)}
                  displayHeight={"42px"}
                  displayMaxHeight={"none"}
                  displayMaxWidth={"100%"}
                  displayMinHeight={"0"}
                  displayMinWidth={"0"}
                  displayWidth={"42px"}
                  loading={"lazy"}
                />

                <PlasmicLink__
                  className={classNames(
                    projectcss.all,
                    projectcss.a,
                    sty.link__n6Tc1
                  )}
                  component={Link}
                  platform={"nextjs"}
                >
                  <h6
                    className={classNames(
                      projectcss.all,
                      projectcss.h6,
                      projectcss.__wab_text,
                      sty.h6__i2Prs
                    )}
                  >
                    {"Trader Name"}
                  </h6>
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text___81YZz
                    )}
                  >
                    {"Trader Name"}
                  </div>
                </PlasmicLink__>
              </Stack__>
              <button
                className={classNames(
                  projectcss.all,
                  projectcss.button,
                  projectcss.__wab_text,
                  sty.button__zM63X
                )}
              >
                {"Follow"}
              </button>
              <PlasmicLink__
                className={classNames(
                  projectcss.all,
                  projectcss.a,
                  sty.link__jm9Wm
                )}
                component={Link}
                platform={"nextjs"}
              >
                <MoreActionsvgIcon
                  className={classNames(projectcss.all, sty.svg__nvqE8)}
                  role={"img"}
                />
              </PlasmicLink__>
            </React.Fragment>
          ),
          value: args.cardTitle2
        })}
      </div>
      <div
        data-plasmic-name={"textContent"}
        data-plasmic-override={overrides.textContent}
        className={classNames(projectcss.all, sty.textContent)}
      >
        {renderPlasmicSlot({
          defaultContents: (
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__q4AtP
              )}
            >
              {
                "Wellcome to algosaur, we are the first social trade in indonesia for crypto market trading"
              }
            </div>
          ),
          value: args.textContent2
        })}
      </div>
      <Stack__
        as={"div"}
        data-plasmic-name={"signalContainer"}
        data-plasmic-override={overrides.signalContainer}
        hasGap={true}
        className={classNames(projectcss.all, sty.signalContainer, {
          [sty.signalContainersignalOn]: hasVariant(
            $state,
            "signalOn",
            "signalOn"
          )
        })}
      >
        {renderPlasmicSlot({
          defaultContents: (
            <React.Fragment>
              <Stack__
                as={"div"}
                hasGap={true}
                className={classNames(projectcss.all, sty.freeBox___049Ex)}
              >
                <PlasmicImg__
                  alt={""}
                  className={classNames(sty.img__h1N8B)}
                  displayHeight={"32px"}
                  displayMaxHeight={"none"}
                  displayMaxWidth={"100%"}
                  displayMinHeight={"0"}
                  displayMinWidth={"0"}
                  displayWidth={"32px"}
                  loading={"lazy"}
                  src={{
                    src: "/plasmic/algosaur_mvp/images/image.png",
                    fullWidth: 64,
                    fullHeight: 64,
                    aspectRatio: undefined
                  }}
                />

                <div className={classNames(projectcss.all, sty.freeBox__bF7RG)}>
                  <h5
                    className={classNames(
                      projectcss.all,
                      projectcss.h5,
                      projectcss.__wab_text,
                      sty.h5__akYVb
                    )}
                  >
                    {"BTC"}
                  </h5>
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__wWpGz
                    )}
                  >
                    {"Bitcoin/usdt"}
                  </div>
                </div>
              </Stack__>
              <div className={classNames(projectcss.all, sty.freeBox___89HmF)}>
                <div
                  className={classNames(projectcss.all, sty.freeBox___0U3Pp)}
                >
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__xLbwt
                    )}
                  >
                    {"Current Price"}
                  </div>
                  <h6
                    className={classNames(
                      projectcss.all,
                      projectcss.h6,
                      projectcss.__wab_text,
                      sty.h6__fmc9Q
                    )}
                  >
                    {"Current Price"}
                  </h6>
                </div>
                <div className={classNames(projectcss.all, sty.freeBox__mqmme)}>
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__gWpPg
                    )}
                  >
                    {"Target Price"}
                  </div>
                  <h6
                    className={classNames(
                      projectcss.all,
                      projectcss.h6,
                      projectcss.__wab_text,
                      sty.h6__b1Nc
                    )}
                  >
                    {"Current Price"}
                  </h6>
                </div>
                <div className={classNames(projectcss.all, sty.freeBox__vlRuO)}>
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__vVqq
                    )}
                  >
                    {"Stop Loss"}
                  </div>
                  <h6
                    className={classNames(
                      projectcss.all,
                      projectcss.h6,
                      projectcss.__wab_text,
                      sty.h6__mesN
                    )}
                  >
                    {"Current Price"}
                  </h6>
                </div>
                <div className={classNames(projectcss.all, sty.freeBox__gyPC)}>
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text___6TMaG
                    )}
                  >
                    {"TP 1"}
                  </div>
                  <h6
                    className={classNames(
                      projectcss.all,
                      projectcss.h6,
                      projectcss.__wab_text,
                      sty.h6__cUhe8
                    )}
                  >
                    {"Current Price"}
                  </h6>
                </div>
                <div
                  className={classNames(projectcss.all, sty.freeBox___8Tmpz)}
                >
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__axiaA
                    )}
                  >
                    {"TP 2"}
                  </div>
                  <h6
                    className={classNames(
                      projectcss.all,
                      projectcss.h6,
                      projectcss.__wab_text,
                      sty.h6__sZmZk
                    )}
                  >
                    {"Current Price"}
                  </h6>
                </div>
                <div className={classNames(projectcss.all, sty.freeBox__oBXu)}>
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__nA3U
                    )}
                  >
                    {"TP 3"}
                  </div>
                  <h6
                    className={classNames(
                      projectcss.all,
                      projectcss.h6,
                      projectcss.__wab_text,
                      sty.h6__plkKh
                    )}
                  >
                    {"Current Price"}
                  </h6>
                </div>
              </div>
              <Button
                className={classNames("__wab_instance", sty.button__yOnVh)}
                color={"green"}
              >
                {"Execute Trade"}
              </Button>
            </React.Fragment>
          ),
          value: args.signalContainer2
        })}
      </Stack__>
      <div
        data-plasmic-name={"cardImage"}
        data-plasmic-override={overrides.cardImage}
        className={classNames(projectcss.all, sty.cardImage, {
          [sty.cardImageimageOn]: hasVariant($state, "imageOn", "imageOn"),
          [sty.cardImagesignalOn]: hasVariant($state, "signalOn", "signalOn")
        })}
      >
        {renderPlasmicSlot({
          defaultContents: (
            <PlasmicImg__
              alt={""}
              className={classNames(sty.img__dFx6L)}
              displayHeight={"auto"}
              displayMaxHeight={"none"}
              displayMaxWidth={"100%"}
              displayMinHeight={"0"}
              displayMinWidth={"0"}
              displayWidth={"100%"}
              loading={"lazy"}
            />
          ),

          value: args.cardImage2
        })}
      </div>
      <Stack__
        as={"div"}
        data-plasmic-name={"cardToolbar"}
        data-plasmic-override={overrides.cardToolbar}
        hasGap={true}
        className={classNames(projectcss.all, sty.cardToolbar, {
          [sty.cardToolbarsignalOn]: hasVariant($state, "signalOn", "signalOn")
        })}
      >
        {renderPlasmicSlot({
          defaultContents: (
            <React.Fragment>
              <Stack__
                as={"div"}
                hasGap={true}
                className={classNames(projectcss.all, sty.freeBox___0Kjr7)}
              >
                <Chart2SvgIcon
                  className={classNames(projectcss.all, sty.svg___73EcK)}
                  role={"img"}
                />

                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__guL8
                  )}
                >
                  {"12.3K"}
                </div>
              </Stack__>
              <Stack__
                as={"div"}
                hasGap={true}
                className={classNames(projectcss.all, sty.freeBox__sSvZi)}
              >
                <HeartsvgIcon
                  className={classNames(projectcss.all, sty.svg__zNrMy)}
                  role={"img"}
                />

                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__fjLhi
                  )}
                >
                  {"12.3K"}
                </div>
              </Stack__>
              <Stack__
                as={"div"}
                hasGap={true}
                className={classNames(projectcss.all, sty.freeBox__efnva)}
              >
                <MessageSearchsvgIcon
                  className={classNames(projectcss.all, sty.svg__k6YW)}
                  role={"img"}
                />

                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__rs9Fe
                  )}
                >
                  {"12.3K"}
                </div>
              </Stack__>
              <Stack__
                as={"div"}
                hasGap={true}
                className={classNames(projectcss.all, sty.freeBox___5LcaX)}
              >
                <SendsvgIcon
                  className={classNames(projectcss.all, sty.svg__xerxt)}
                  role={"img"}
                />

                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__tDXw5
                  )}
                >
                  {"12.3K"}
                </div>
              </Stack__>
            </React.Fragment>
          ),
          value: args.cardToolbar2
        })}
      </Stack__>
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  contentCard: [
    "contentCard",
    "cardTitle",
    "textContent",
    "signalContainer",
    "cardImage",
    "cardToolbar"
  ],
  cardTitle: ["cardTitle"],
  textContent: ["textContent"],
  signalContainer: ["signalContainer"],
  cardImage: ["cardImage"],
  cardToolbar: ["cardToolbar"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  contentCard: "div";
  cardTitle: "div";
  textContent: "div";
  signalContainer: "div";
  cardImage: "div";
  cardToolbar: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicContentCard__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicContentCard__VariantsArgs;
    args?: PlasmicContentCard__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicContentCard__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicContentCard__ArgsType,
      ReservedPropsType
    > &
    /* Specify overrides for each element directly as props*/ Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    /* Specify props for the root element*/ Omit<
      Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
      ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
    >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: PlasmicDescendants[nodeName],
          internalArgPropNames: PlasmicContentCard__ArgProps,
          internalVariantPropNames: PlasmicContentCard__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicContentCard__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "contentCard") {
    func.displayName = "PlasmicContentCard";
  } else {
    func.displayName = `PlasmicContentCard.${nodeName}`;
  }
  return func;
}

export const PlasmicContentCard = Object.assign(
  // Top-level PlasmicContentCard renders the root element
  makeNodeComponent("contentCard"),
  {
    // Helper components rendering sub-elements
    cardTitle: makeNodeComponent("cardTitle"),
    textContent: makeNodeComponent("textContent"),
    signalContainer: makeNodeComponent("signalContainer"),
    cardImage: makeNodeComponent("cardImage"),
    cardToolbar: makeNodeComponent("cardToolbar"),

    // Metadata about props expected for PlasmicContentCard
    internalVariantProps: PlasmicContentCard__VariantProps,
    internalArgProps: PlasmicContentCard__ArgProps
  }
);

export default PlasmicContentCard;
/* prettier-ignore-end */