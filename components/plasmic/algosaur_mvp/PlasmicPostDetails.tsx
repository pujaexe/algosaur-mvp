// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: ew4qcccnQBEWaCZGLSHX1A
// Component: 8BOfB1aBwSQ2

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

import {
  executePlasmicDataOp,
  usePlasmicDataOp,
  usePlasmicInvalidate
} from "@plasmicapp/react-web/lib/data-sources";

import ContentCard from "../../ContentCard"; // plasmic-import: DQ-iGMz_Q_A3/component
import Button from "../../Button"; // plasmic-import: 8giX1KtcjVQY/component
import { Fetcher } from "@plasmicapp/react-web/lib/data-sources";

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic_antd_5_hostless.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import projectcss from "./plasmic_algosaur_mvp.module.css"; // plasmic-import: ew4qcccnQBEWaCZGLSHX1A/projectcss
import sty from "./PlasmicPostDetails.module.css"; // plasmic-import: 8BOfB1aBwSQ2/css

import ArrowLeftsvgIcon from "./icons/PlasmicIcon__ArrowLeftsvg"; // plasmic-import: kPKqYoEHNqTg/icon
import MoreActionsvgIcon from "./icons/PlasmicIcon__MoreActionsvg"; // plasmic-import: MnOKxswBKHML/icon
import ChecksvgIcon from "./icons/PlasmicIcon__Checksvg"; // plasmic-import: -130KpeBfD4P/icon
import IconIcon from "./icons/PlasmicIcon__Icon"; // plasmic-import: 24qZhALD5Ijc/icon
import Chart2SvgIcon from "./icons/PlasmicIcon__Chart2Svg"; // plasmic-import: cMq8UZJb80d2/icon
import HeartsvgIcon from "./icons/PlasmicIcon__Heartsvg"; // plasmic-import: 0aygCqYTkOUE/icon
import MessageSearchsvgIcon from "./icons/PlasmicIcon__MessageSearchsvg"; // plasmic-import: U16v4RSuvpKR/icon
import SendsvgIcon from "./icons/PlasmicIcon__Sendsvg"; // plasmic-import: i2HuPZe481FC/icon

createPlasmicElementProxy;

export type PlasmicPostDetails__VariantMembers = {};
export type PlasmicPostDetails__VariantsArgs = {};
type VariantPropType = keyof PlasmicPostDetails__VariantsArgs;
export const PlasmicPostDetails__VariantProps = new Array<VariantPropType>();

export type PlasmicPostDetails__ArgsType = {};
type ArgPropType = keyof PlasmicPostDetails__ArgsType;
export const PlasmicPostDetails__ArgProps = new Array<ArgPropType>();

export type PlasmicPostDetails__OverridesType = {
  root?: Flex__<"div">;
  header?: Flex__<"div">;
  section?: Flex__<"section">;
  contentCard?: Flex__<typeof ContentCard>;
  avatar?: Flex__<typeof PlasmicImg__>;
  name?: Flex__<"a"> & Partial<LinkProps>;
  coinTicker?: Flex__<"div">;
  img?: Flex__<typeof PlasmicImg__>;
  h5?: Flex__<"h5">;
  signal?: Flex__<"div">;
  chart?: Flex__<"div">;
  love?: Flex__<"div">;
  comment?: Flex__<"div">;
  send?: Flex__<"div">;
};

export interface DefaultPostDetailsProps {}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicPostDetails__RenderFunc(props: {
  variants: PlasmicPostDetails__VariantsArgs;
  args: PlasmicPostDetails__ArgsType;
  overrides: PlasmicPostDetails__OverridesType;
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

  let [$queries, setDollarQueries] = React.useState<
    Record<string, ReturnType<typeof usePlasmicDataOp>>
  >({});

  const new$Queries: Record<string, ReturnType<typeof usePlasmicDataOp>> = {
    queryPost: usePlasmicDataOp(() => {
      return {
        sourceId: "Vr4rooBQrNWbUq3yvzDoK",
        opId: "de9581e2-6875-48da-b3cd-8a870b87df8a",
        userArgs: {
          filters: [$ctx.params.id, $ctx.params.trader]
        },
        cacheKey: `plasmic.$.${(() => {
          try {
            return "getOne";
          } catch (e) {
            if (
              e instanceof TypeError ||
              e?.plasmicType === "PlasmicUndefinedDataError"
            ) {
              return "";
            }
            throw e;
          }
        })()}.$.de9581e2-6875-48da-b3cd-8a870b87df8a.$.`,
        invalidatedKeys: null,
        roleId: null
      };
    }),
    queryTrader: usePlasmicDataOp(() => {
      return {
        sourceId: "Vr4rooBQrNWbUq3yvzDoK",
        opId: "126e678d-21b1-46b3-87c4-f877f1ae384e",
        userArgs: {
          filters: [$ctx.params.trader]
        },
        cacheKey: `plasmic.$.126e678d-21b1-46b3-87c4-f877f1ae384e.$.`,
        invalidatedKeys: null,
        roleId: null
      };
    }),
    queryToken: usePlasmicDataOp(() => {
      return {
        sourceId: "Vr4rooBQrNWbUq3yvzDoK",
        opId: "fcedc6f0-086f-4da5-92ff-c5e49ac6d731",
        userArgs: {
          filters: [$queries.queryPost.data[0].signal.Symbol]
        },
        cacheKey: `plasmic.$.fcedc6f0-086f-4da5-92ff-c5e49ac6d731.$.`,
        invalidatedKeys: null,
        roleId: null
      };
    })
  };
  if (Object.keys(new$Queries).some(k => new$Queries[k] !== $queries[k])) {
    setDollarQueries(new$Queries);

    $queries = new$Queries;
  }

  return (
    <React.Fragment>
      <Head></Head>

      <style>{`
        body {
          margin: 0;
        }
      `}</style>

      <div className={projectcss.plasmic_page_wrapper}>
        <div
          data-plasmic-name={"root"}
          data-plasmic-override={overrides.root}
          data-plasmic-root={true}
          data-plasmic-for-node={forNode}
          className={classNames(
            projectcss.all,
            projectcss.root_reset,
            projectcss.plasmic_default_styles,
            projectcss.plasmic_mixins,
            projectcss.plasmic_tokens,
            plasmic_antd_5_hostless_css.plasmic_tokens,
            sty.root
          )}
        >
          <div
            data-plasmic-name={"header"}
            data-plasmic-override={overrides.header}
            className={classNames(projectcss.all, sty.header)}
          >
            <div className={classNames(projectcss.all, sty.freeBox___9PkJ5)}>
              <PlasmicLink__
                className={classNames(
                  projectcss.all,
                  projectcss.a,
                  sty.link__kqkT8
                )}
                component={Link}
                href={`/`}
                platform={"nextjs"}
              >
                <ArrowLeftsvgIcon
                  className={classNames(projectcss.all, sty.svg__mIU)}
                  role={"img"}
                />
              </PlasmicLink__>
              <Stack__
                as={"div"}
                hasGap={true}
                className={classNames(projectcss.all, sty.freeBox__uaNp)}
              >
                <PlasmicLink__
                  className={classNames(
                    projectcss.all,
                    projectcss.a,
                    sty.link__iB2Xy
                  )}
                  component={Link}
                  platform={"nextjs"}
                >
                  <MoreActionsvgIcon
                    className={classNames(projectcss.all, sty.svg__xxsQl)}
                    role={"img"}
                  />
                </PlasmicLink__>
              </Stack__>
            </div>
          </div>
          <section
            data-plasmic-name={"section"}
            data-plasmic-override={overrides.section}
            className={classNames(projectcss.all, sty.section)}
          >
            <ContentCard
              data-plasmic-name={"contentCard"}
              data-plasmic-override={overrides.contentCard}
              cardTitle2={
                <React.Fragment>
                  <Stack__
                    as={"div"}
                    hasGap={true}
                    className={classNames(projectcss.all, sty.freeBox__qh1Fo)}
                  >
                    <PlasmicImg__
                      data-plasmic-name={"avatar"}
                      data-plasmic-override={overrides.avatar}
                      alt={""}
                      className={classNames(sty.avatar)}
                      displayHeight={"42px"}
                      displayMaxHeight={"none"}
                      displayMaxWidth={"100%"}
                      displayMinHeight={"0"}
                      displayMinWidth={"0"}
                      displayWidth={"42px"}
                      loading={"lazy"}
                      src={(() => {
                        try {
                          return $queries.queryTrader.data[0].avatar;
                        } catch (e) {
                          if (
                            e instanceof TypeError ||
                            e?.plasmicType === "PlasmicUndefinedDataError"
                          ) {
                            return undefined;
                          }
                          throw e;
                        }
                      })()}
                    />

                    <PlasmicLink__
                      data-plasmic-name={"name"}
                      data-plasmic-override={overrides.name}
                      className={classNames(
                        projectcss.all,
                        projectcss.a,
                        sty.name
                      )}
                      component={Link}
                      platform={"nextjs"}
                    >
                      <h6
                        className={classNames(
                          projectcss.all,
                          projectcss.h6,
                          projectcss.__wab_text,
                          sty.h6__w5Ke5
                        )}
                      >
                        <React.Fragment>
                          {(() => {
                            try {
                              return $queries.queryPost.data[0].username;
                            } catch (e) {
                              if (
                                e instanceof TypeError ||
                                e?.plasmicType === "PlasmicUndefinedDataError"
                              ) {
                                return "Trader Name";
                              }
                              throw e;
                            }
                          })()}
                        </React.Fragment>
                      </h6>
                      <div
                        className={classNames(
                          projectcss.all,
                          projectcss.__wab_text,
                          sty.text__fyuQk
                        )}
                      >
                        <React.Fragment>
                          {(() => {
                            try {
                              return (() => {
                                const currentDate = new Date();
                                const createdAt = new Date(
                                  $queries.queryPost.data[0].created_at
                                );
                                const timeDiffMs =
                                  currentDate.getTime() - createdAt.getTime();
                                const minutesDiff = Math.floor(
                                  timeDiffMs / (1000 * 60)
                                );
                                const hoursDiff = Math.floor(
                                  timeDiffMs / (1000 * 60 * 60)
                                );
                                const daysDiff = Math.floor(
                                  timeDiffMs / (1000 * 60 * 60 * 24)
                                );

                                if (minutesDiff < 60) {
                                  return `${minutesDiff} minutes ago`;
                                } else if (hoursDiff < 24) {
                                  return `${hoursDiff} hours ago`;
                                } else {
                                  return `${daysDiff} days ago`;
                                }
                              })();
                            } catch (e) {
                              if (
                                e instanceof TypeError ||
                                e?.plasmicType === "PlasmicUndefinedDataError"
                              ) {
                                return "Trader Name";
                              }
                              throw e;
                            }
                          })()}
                        </React.Fragment>
                      </div>
                    </PlasmicLink__>
                  </Stack__>
                  <button
                    className={classNames(
                      projectcss.all,
                      projectcss.button,
                      projectcss.__wab_text,
                      sty.button___9JzXb
                    )}
                  >
                    {"Follow"}
                  </button>
                  <PlasmicLink__
                    className={classNames(
                      projectcss.all,
                      projectcss.a,
                      sty.link__taqlj
                    )}
                    component={Link}
                    platform={"nextjs"}
                  >
                    <MoreActionsvgIcon
                      className={classNames(projectcss.all, sty.svg__fgtJm)}
                      role={"img"}
                    />
                  </PlasmicLink__>
                </React.Fragment>
              }
              cardToolbar2={
                <React.Fragment>
                  <Stack__
                    as={"div"}
                    data-plasmic-name={"chart"}
                    data-plasmic-override={overrides.chart}
                    hasGap={true}
                    className={classNames(projectcss.all, sty.chart)}
                  >
                    <Chart2SvgIcon
                      className={classNames(projectcss.all, sty.svg__ukb6K)}
                      role={"img"}
                    />

                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text__ylaH
                      )}
                    >
                      <React.Fragment>
                        {(() => {
                          try {
                            return $queries.queryPost.data[0]
                              .interactionAgregate.view;
                          } catch (e) {
                            if (
                              e instanceof TypeError ||
                              e?.plasmicType === "PlasmicUndefinedDataError"
                            ) {
                              return "12.3K";
                            }
                            throw e;
                          }
                        })()}
                      </React.Fragment>
                    </div>
                  </Stack__>
                  <Stack__
                    as={"div"}
                    data-plasmic-name={"love"}
                    data-plasmic-override={overrides.love}
                    hasGap={true}
                    className={classNames(projectcss.all, sty.love)}
                  >
                    <HeartsvgIcon
                      className={classNames(projectcss.all, sty.svg__mkDay)}
                      role={"img"}
                    />

                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text__wjuRi
                      )}
                    >
                      <React.Fragment>
                        {(() => {
                          try {
                            return $queries.queryPost.data[0]
                              .interactionAgregate.likes;
                          } catch (e) {
                            if (
                              e instanceof TypeError ||
                              e?.plasmicType === "PlasmicUndefinedDataError"
                            ) {
                              return "12.3K";
                            }
                            throw e;
                          }
                        })()}
                      </React.Fragment>
                    </div>
                  </Stack__>
                  <Stack__
                    as={"div"}
                    data-plasmic-name={"comment"}
                    data-plasmic-override={overrides.comment}
                    hasGap={true}
                    className={classNames(projectcss.all, sty.comment)}
                  >
                    <MessageSearchsvgIcon
                      className={classNames(projectcss.all, sty.svg__wksAc)}
                      role={"img"}
                    />

                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text__jJyyv
                      )}
                    >
                      <React.Fragment>
                        {(() => {
                          try {
                            return $queries.queryPost.data[0]
                              .interactionAgregate.comments;
                          } catch (e) {
                            if (
                              e instanceof TypeError ||
                              e?.plasmicType === "PlasmicUndefinedDataError"
                            ) {
                              return "12.3K";
                            }
                            throw e;
                          }
                        })()}
                      </React.Fragment>
                    </div>
                  </Stack__>
                  <Stack__
                    as={"div"}
                    data-plasmic-name={"send"}
                    data-plasmic-override={overrides.send}
                    hasGap={true}
                    className={classNames(projectcss.all, sty.send)}
                  >
                    <SendsvgIcon
                      className={classNames(projectcss.all, sty.svg__re2P)}
                      role={"img"}
                    />

                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text__g8AeD
                      )}
                    >
                      <React.Fragment>
                        {(() => {
                          try {
                            return $queries.queryPost.data[0]
                              .interactionAgregate.share;
                          } catch (e) {
                            if (
                              e instanceof TypeError ||
                              e?.plasmicType === "PlasmicUndefinedDataError"
                            ) {
                              return "12.3K";
                            }
                            throw e;
                          }
                        })()}
                      </React.Fragment>
                    </div>
                  </Stack__>
                </React.Fragment>
              }
              className={classNames("__wab_instance", sty.contentCard)}
              imageOn={(() => {
                try {
                  return $queries.queryPost.data[0].image != null;
                } catch (e) {
                  if (
                    e instanceof TypeError ||
                    e?.plasmicType === "PlasmicUndefinedDataError"
                  ) {
                    return [];
                  }
                  throw e;
                }
              })()}
              signalContainer2={
                <React.Fragment>
                  <Stack__
                    as={"div"}
                    data-plasmic-name={"coinTicker"}
                    data-plasmic-override={overrides.coinTicker}
                    hasGap={true}
                    className={classNames(projectcss.all, sty.coinTicker)}
                  >
                    <PlasmicImg__
                      data-plasmic-name={"img"}
                      data-plasmic-override={overrides.img}
                      alt={""}
                      className={classNames(sty.img)}
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

                    <div
                      className={classNames(projectcss.all, sty.freeBox__oRdR3)}
                    >
                      <h5
                        data-plasmic-name={"h5"}
                        data-plasmic-override={overrides.h5}
                        className={classNames(
                          projectcss.all,
                          projectcss.h5,
                          projectcss.__wab_text,
                          sty.h5
                        )}
                      >
                        {"BTC"}
                      </h5>
                      <div
                        className={classNames(
                          projectcss.all,
                          projectcss.__wab_text,
                          sty.text__attxK
                        )}
                      >
                        {"Bitcoin/usdt"}
                      </div>
                    </div>
                  </Stack__>
                  <div
                    data-plasmic-name={"signal"}
                    data-plasmic-override={overrides.signal}
                    className={classNames(projectcss.all, sty.signal)}
                  >
                    <div
                      className={classNames(
                        projectcss.all,
                        sty.freeBox___2QU2M
                      )}
                    >
                      <div
                        className={classNames(
                          projectcss.all,
                          projectcss.__wab_text,
                          sty.text__eIi4
                        )}
                      >
                        {"Current Price"}
                      </div>
                      <h6
                        className={classNames(
                          projectcss.all,
                          projectcss.h6,
                          projectcss.__wab_text,
                          sty.h6___97P6S
                        )}
                      >
                        <React.Fragment>
                          {(() => {
                            try {
                              return $queries.queryPost.data[0].signal
                                .currentPrice;
                            } catch (e) {
                              if (
                                e instanceof TypeError ||
                                e?.plasmicType === "PlasmicUndefinedDataError"
                              ) {
                                return "Current Price";
                              }
                              throw e;
                            }
                          })()}
                        </React.Fragment>
                      </h6>
                    </div>
                    <div
                      className={classNames(projectcss.all, sty.freeBox__svUi1)}
                    >
                      <div
                        className={classNames(
                          projectcss.all,
                          projectcss.__wab_text,
                          sty.text__eIdr6
                        )}
                      >
                        {"Target Price"}
                      </div>
                      <h6
                        className={classNames(
                          projectcss.all,
                          projectcss.h6,
                          projectcss.__wab_text,
                          sty.h6__bcfZc
                        )}
                      >
                        <React.Fragment>
                          {(() => {
                            try {
                              return $queries.queryPost.data[0].signal
                                .targetPrice;
                            } catch (e) {
                              if (
                                e instanceof TypeError ||
                                e?.plasmicType === "PlasmicUndefinedDataError"
                              ) {
                                return "Current Price";
                              }
                              throw e;
                            }
                          })()}
                        </React.Fragment>
                      </h6>
                    </div>
                    <div
                      className={classNames(projectcss.all, sty.freeBox__zhUb2)}
                    >
                      <div
                        className={classNames(
                          projectcss.all,
                          projectcss.__wab_text,
                          sty.text__wvCvu
                        )}
                      >
                        {"Stop Loss"}
                      </div>
                      <h6
                        className={classNames(
                          projectcss.all,
                          projectcss.h6,
                          projectcss.__wab_text,
                          sty.h6___87FjW
                        )}
                      >
                        <React.Fragment>
                          {(() => {
                            try {
                              return $queries.queryPost.data[0].signal.stopLoss;
                            } catch (e) {
                              if (
                                e instanceof TypeError ||
                                e?.plasmicType === "PlasmicUndefinedDataError"
                              ) {
                                return "Current Price";
                              }
                              throw e;
                            }
                          })()}
                        </React.Fragment>
                      </h6>
                    </div>
                    <div
                      className={classNames(projectcss.all, sty.freeBox__rvGe)}
                    >
                      <div
                        className={classNames(
                          projectcss.all,
                          projectcss.__wab_text,
                          sty.text___3ExFn
                        )}
                      >
                        {"TP 1"}
                      </div>
                      <h6
                        className={classNames(
                          projectcss.all,
                          projectcss.h6,
                          projectcss.__wab_text,
                          sty.h6__djHyW
                        )}
                      >
                        <React.Fragment>
                          {(() => {
                            try {
                              return $queries.queryPost.data[0].signal.TP1;
                            } catch (e) {
                              if (
                                e instanceof TypeError ||
                                e?.plasmicType === "PlasmicUndefinedDataError"
                              ) {
                                return "Current Price";
                              }
                              throw e;
                            }
                          })()}
                        </React.Fragment>
                      </h6>
                    </div>
                    <div
                      className={classNames(projectcss.all, sty.freeBox__m3FgG)}
                    >
                      <div
                        className={classNames(
                          projectcss.all,
                          projectcss.__wab_text,
                          sty.text__gQ76E
                        )}
                      >
                        {"TP 2"}
                      </div>
                      <h6
                        className={classNames(
                          projectcss.all,
                          projectcss.h6,
                          projectcss.__wab_text,
                          sty.h6__uTksW
                        )}
                      >
                        <React.Fragment>
                          {(() => {
                            try {
                              return $queries.queryPost.data[0].signal.TP2;
                            } catch (e) {
                              if (
                                e instanceof TypeError ||
                                e?.plasmicType === "PlasmicUndefinedDataError"
                              ) {
                                return "Current Price";
                              }
                              throw e;
                            }
                          })()}
                        </React.Fragment>
                      </h6>
                    </div>
                    <div
                      className={classNames(projectcss.all, sty.freeBox__gT23K)}
                    >
                      <div
                        className={classNames(
                          projectcss.all,
                          projectcss.__wab_text,
                          sty.text___3165T
                        )}
                      >
                        {"TP 3"}
                      </div>
                      <h6
                        className={classNames(
                          projectcss.all,
                          projectcss.h6,
                          projectcss.__wab_text,
                          sty.h6__rYePi
                        )}
                      >
                        <React.Fragment>
                          {(() => {
                            try {
                              return $queries.queryPost.data[0].signal.TP3;
                            } catch (e) {
                              if (
                                e instanceof TypeError ||
                                e?.plasmicType === "PlasmicUndefinedDataError"
                              ) {
                                return "Current Price";
                              }
                              throw e;
                            }
                          })()}
                        </React.Fragment>
                      </h6>
                    </div>
                  </div>
                  <Button
                    className={classNames("__wab_instance", sty.button__g5SSi)}
                    color={"green"}
                  >
                    {"Execute Trade"}
                  </Button>
                </React.Fragment>
              }
              signalOn={(() => {
                try {
                  return $queries.queryPost.data[0].signal != null;
                } catch (e) {
                  if (
                    e instanceof TypeError ||
                    e?.plasmicType === "PlasmicUndefinedDataError"
                  ) {
                    return [];
                  }
                  throw e;
                }
              })()}
              textContent2={
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__hlkBf
                  )}
                >
                  <React.Fragment>
                    {(() => {
                      try {
                        return $queries.queryPost.data[0].caption;
                      } catch (e) {
                        if (
                          e instanceof TypeError ||
                          e?.plasmicType === "PlasmicUndefinedDataError"
                        ) {
                          return "Wellcome to algosaur, we are the first social trade in indonesia for crypto market trading";
                        }
                        throw e;
                      }
                    })()}
                  </React.Fragment>
                </div>
              }
            />
          </section>
        </div>
      </div>
    </React.Fragment>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: [
    "root",
    "header",
    "section",
    "contentCard",
    "avatar",
    "name",
    "coinTicker",
    "img",
    "h5",
    "signal",
    "chart",
    "love",
    "comment",
    "send"
  ],
  header: ["header"],
  section: [
    "section",
    "contentCard",
    "avatar",
    "name",
    "coinTicker",
    "img",
    "h5",
    "signal",
    "chart",
    "love",
    "comment",
    "send"
  ],
  contentCard: [
    "contentCard",
    "avatar",
    "name",
    "coinTicker",
    "img",
    "h5",
    "signal",
    "chart",
    "love",
    "comment",
    "send"
  ],
  avatar: ["avatar"],
  name: ["name"],
  coinTicker: ["coinTicker", "img", "h5"],
  img: ["img"],
  h5: ["h5"],
  signal: ["signal"],
  chart: ["chart"],
  love: ["love"],
  comment: ["comment"],
  send: ["send"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  header: "div";
  section: "section";
  contentCard: typeof ContentCard;
  avatar: typeof PlasmicImg__;
  name: "a";
  coinTicker: "div";
  img: typeof PlasmicImg__;
  h5: "h5";
  signal: "div";
  chart: "div";
  love: "div";
  comment: "div";
  send: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicPostDetails__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicPostDetails__VariantsArgs;
    args?: PlasmicPostDetails__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicPostDetails__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicPostDetails__ArgsType,
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
          internalArgPropNames: PlasmicPostDetails__ArgProps,
          internalVariantPropNames: PlasmicPostDetails__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicPostDetails__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicPostDetails";
  } else {
    func.displayName = `PlasmicPostDetails.${nodeName}`;
  }
  return func;
}

export const PlasmicPostDetails = Object.assign(
  // Top-level PlasmicPostDetails renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    header: makeNodeComponent("header"),
    section: makeNodeComponent("section"),
    contentCard: makeNodeComponent("contentCard"),
    avatar: makeNodeComponent("avatar"),
    _name: makeNodeComponent("name"),
    coinTicker: makeNodeComponent("coinTicker"),
    img: makeNodeComponent("img"),
    h5: makeNodeComponent("h5"),
    signal: makeNodeComponent("signal"),
    chart: makeNodeComponent("chart"),
    love: makeNodeComponent("love"),
    comment: makeNodeComponent("comment"),
    send: makeNodeComponent("send"),

    // Metadata about props expected for PlasmicPostDetails
    internalVariantProps: PlasmicPostDetails__VariantProps,
    internalArgProps: PlasmicPostDetails__ArgProps,

    // Page metadata
    pageMetadata: {
      title: "",
      description: "",
      ogImageSrc: "",
      canonical: ""
    }
  }
);

export default PlasmicPostDetails;
/* prettier-ignore-end */