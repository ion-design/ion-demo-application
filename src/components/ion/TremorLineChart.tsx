// Generated with Ion on 2/19/2024, 9:26:40 AM
// Figma Link: https://www.figma.com/file/LncZWxVTpD4svqEUVk63pC?node-id=3149:187
import React, { useState, useEffect } from "react";
import clsx from "clsx";

type TremorLineChartProps = {
  xAxisType?: "number" | "date";
  yAxisType?: "money" | "number";
  count?: "1" | "2" | "3" | "4" | "5";
  className?: string;
};

function TremorLineChart({
  xAxisType = "date",
  yAxisType = "money",
  count = "1",
  className = "",
}: TremorLineChartProps) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const xAxisTypeTexts: Record<
    NonNullable<TremorLineChartProps["xAxisType"]>,
    string
  > = {
    date: "$ 4,000",
    number: "5",
  };
  const xAxisTypeTexts_1: Record<
    NonNullable<TremorLineChartProps["xAxisType"]>,
    string
  > = {
    date: "$ 3,000",
    number: "4",
  };
  const xAxisTypeTexts_2: Record<
    NonNullable<TremorLineChartProps["xAxisType"]>,
    string
  > = {
    date: "$ 2,000",
    number: "3",
  };
  const xAxisTypeTexts_3: Record<
    NonNullable<TremorLineChartProps["xAxisType"]>,
    string
  > = {
    date: "$ 1,000",
    number: "2",
  };
  const xAxisTypeTexts_4: Record<
    NonNullable<TremorLineChartProps["xAxisType"]>,
    string
  > = {
    date: "$ 0",
    number: "1",
  };
  const xAxisTypeTexts_5: Record<
    NonNullable<TremorLineChartProps["xAxisType"]>,
    string
  > = {
    date: "Jan 22",
    number: "1",
  };
  const xAxisTypeTexts_6: Record<
    NonNullable<TremorLineChartProps["xAxisType"]>,
    string
  > = {
    date: "Feb 22",
    number: "2",
  };
  const xAxisTypeTexts_7: Record<
    NonNullable<TremorLineChartProps["xAxisType"]>,
    string
  > = {
    date: "Mar 22",
    number: "3",
  };
  const xAxisTypeTexts_8: Record<
    NonNullable<TremorLineChartProps["xAxisType"]>,
    string
  > = {
    date: "Apr 22",
    number: "4",
  };
  const xAxisTypeTexts_9: Record<
    NonNullable<TremorLineChartProps["xAxisType"]>,
    string
  > = {
    date: "May 22",
    number: "5",
  };
  const xAxisTypeTexts_10: Record<
    NonNullable<TremorLineChartProps["xAxisType"]>,
    string
  > = {
    date: "Jun 22",
    number: "6",
  };
  const xAxisTypeTexts_11: Record<
    NonNullable<TremorLineChartProps["xAxisType"]>,
    string
  > = {
    date: "Jul 22",
    number: "7",
  };
  const xAxisTypeTexts_12: Record<
    NonNullable<TremorLineChartProps["xAxisType"]>,
    string
  > = {
    date: "Aug 22",
    number: "8",
  };
  const xAxisTypeTexts_13: Record<
    NonNullable<TremorLineChartProps["xAxisType"]>,
    string
  > = {
    date: "Sep 22",
    number: "9",
  };
  const xAxisTypeTexts_14: Record<
    NonNullable<TremorLineChartProps["xAxisType"]>,
    string
  > = {
    date: "Oct 22",
    number: "10",
  };
  const xAxisTypeTexts_15: Record<
    NonNullable<TremorLineChartProps["xAxisType"]>,
    string
  > = {
    date: "Nov 22",
    number: "11",
  };
  const xAxisTypeTexts_16: Record<
    NonNullable<TremorLineChartProps["xAxisType"]>,
    string
  > = {
    date: "Dec 22",
    number: "12",
  };

  return (
    <div
      className={clsx(
        "w-[829px] flex-col flex items-center gap-4 p-6 rounded-radius-xs h-fit",
        className,
        isMounted
          ? "opacity-100 translate-y-0 transition-opacity duration-1000 ease-out transition-transform duration-1000 ease-out"
          : "opacity-0 translate-y-4"
      )}
    >
      <div
        className={clsx(
          "flex items-start gap-3 text-sm font-semibold transition-opacity duration-500 ease-out",
          {
            "text-foreground": count === "5",
            "opacity-100": isMounted,
            "opacity-0": !isMounted,
          }
        )}
      >
        <div
          className={clsx(
            "flex items-center gap-1.5 transition-opacity duration-500 ease-out",
            {
              "text-foreground":
                count === "1" || count === "2" || count === "3" || count === "4",
              "opacity-100": isMounted,
              "opacity-0": !isMounted,
            }
          )}
        >
          <img src="imgsrc|I3149:190;3149:9|Dot" alt="Dot" className="h-2" />
          <div>Category 1</div>
        </div>
        {(count === "2" || count === "3" || count === "4" || count === "5") && (
          <div
            className={clsx(
              "flex items-center gap-1.5 transition-opacity duration-500 ease-out",
              {
                "text-foreground":
                  count === "2" || count === "3" || count === "4",
                "opacity-100": isMounted,
                "opacity-0": !isMounted,
              }
            )}
          >
            <img src="imgsrc|I3149:227;3149:28|Dot" alt="Dot" className="h-2" />
            <div>Category 2</div>
          </div>
        )}
        {(count === "3" || count === "4" || count === "5") && (
          <div
            className={clsx(
              "flex items-center gap-1.5 transition-opacity duration-500 ease-out",
              {
                "text-foreground": count === "3" || count === "4",
                "opacity-100": isMounted,
                "opacity-0": !isMounted,
              }
            )}
          >
            <img src="imgsrc|I3149:264;3149:47|Dot" alt="Dot" className="h-2" />
            <div>Category 3</div>
          </div>
        )}
        {(count === "4" || count === "5") && (
          <div
            className={clsx(
              "flex items-center gap-1.5 transition-opacity duration-500 ease-out",
              {
                "text-foreground": count === "4",
                "opacity-100": isMounted,
                "opacity-0": !isMounted,
              }
            )}
          >
            <img src="imgsrc|I3149:301;3149:66|Dot" alt="Dot" className="h-2" />
            <div>Category 4</div>
          </div>
        )}
        {count === "5" && (
          <div
            className={clsx(
              "flex items-center gap-1.5 transition-opacity duration-500 ease-out",
              {
                "opacity-100": isMounted,
                "opacity-0": !isMounted,
              }
            )}
          >
            <img src="imgsrc|I3149:338;3149:85|Dot" alt="Dot" className="h-2" />
            <div>Category 5</div>
          </div>
        )}
      </div>
      <div className="w-[781px] h-[280px] flex-col flex gap-1">
        <div className="w-full flex-1 flex gap-2">
          <div className="h-full flex-col flex justify-between items-end gap-3.5 pb-6 text-xs leading-4 text-right text-sub-foreground">
            <div
              className={clsx(
                "transition-opacity duration-700 ease-out",
                { "opacity-100": isMounted, "opacity-0": !isMounted }
              )}
            >
              {xAxisTypeTexts[xAxisType]}
            </div>
            <div
              className={clsx(
                "transition-opacity duration-700 ease-out",
                { "opacity-100": isMounted, "opacity-0": !isMounted }
              )}
            >
              {xAxisTypeTexts_1[xAxisType]}
            </div>
            <div
              className={clsx(
                "transition-opacity duration-700 ease-out",
                { "opacity-100": isMounted, "opacity-0": !isMounted }
              )}
            >
              {xAxisTypeTexts_2[xAxisType]}
            </div>
            <div
              className={clsx(
                "transition-opacity duration-700 ease-out",
                { "opacity-100": isMounted, "opacity-0": !isMounted }
              )}
            >
              {xAxisTypeTexts_3[xAxisType]}
            </div>
            <div
              className={clsx(
                "transition-opacity duration-700 ease-out",
                { "opacity-100": isMounted, "opacity-0": !isMounted }
              )}
            >
              {xAxisTypeTexts_4[xAxisType]}
            </div>
          </div>
          <div className="relative h-full flex-1 flex-col flex gap-2">
            <div className="w-full flex-1 flex-col flex justify-between gap-[59px] py-1.5">
              <img
                src="imgsrc|3149:201|Grid lines"
                alt="Grid lines"
                className={clsx(
                  "w-full transition-opacity duration-1000 ease-out",
                  { "opacity-100": isMounted, "opacity-0": !isMounted }
                )}
              />
              <img
                src="imgsrc|3149:201|Grid lines"
                alt="Grid lines"
                className={clsx(
                  "w-full transition-opacity duration-1000 ease-out delay-100",
                  { "opacity-100": isMounted, "opacity-0": !isMounted }
                )}
              />
              <img
                src="imgsrc|3149:201|Grid lines"
                alt="Grid lines"
                className={clsx(
                  "w-full transition-opacity duration-1000 ease-out delay-200",
                  { "opacity-100": isMounted, "opacity-0": !isMounted }
                )}
              />
              <img
                src="imgsrc|3149:201|Grid lines"
                alt="Grid lines"
                className={clsx(
                  "w-full transition-opacity duration-1000 ease-out delay-300",
                  { "opacity-100": isMounted, "opacity-0": !isMounted }
                )}
              />
              <img
                src="imgsrc|3149:201|Grid lines"
                alt="Grid lines"
                className={clsx(
                  "w-full transition-opacity duration-1000 ease-out delay-400",
                  { "opacity-100": isMounted, "opacity-0": !isMounted }
                )}
              />
            </div>
            <div
              className={clsx(
                "top-[7px] absolute h-[247px] flex-col flex px-0.5 pb-[3px]",
                {
                  "right-[10px]": yAxisType === "money",
                  "right-[28px]": yAxisType === "number",
                },
                isMounted
                  ? "opacity-100 transition-opacity duration-1000 ease-out"
                  : "opacity-0"
              )}
            >
              <img
                src="imgsrc|3149:207|tremor/line"
                alt="tremor/line"
                className={clsx(
                  "w-full h-[218px] right-0.5 top-0 absolute transition-transform duration-1000 ease-out",
                  { "translate-x-0": isMounted, "translate-x-4": !isMounted }
                )}
              />
              {(count === "2" ||
                count === "3" ||
                count === "4" ||
                count === "5") && (
                <img
                  src="imgsrc|3149:207|tremor/line"
                  alt="tremor/line"
                  className={clsx(
                    "w-full h-[218px] right-0.5 top-0 absolute transition-transform duration-1000 ease-out delay-200",
                    { "translate-x-0": isMounted, "translate-x-4": !isMounted }
                  )}
                />
              )}
              {(count === "3" || count === "4" || count === "5") && (
                <img
                  src="imgsrc|3149:207|tremor/line"
                  alt="tremor/line"
                  className={clsx(
                    "w-full h-[218px] right-0.5 top-0 absolute transition-transform duration-1000 ease-out delay-400",
                    { "translate-x-0": isMounted, "translate-x-4": !isMounted }
                  )}
                />
              )}
              {(count === "4" || count === "5") && (
                <img
                  src="imgsrc|3149:207|tremor/line"
                  alt="tremor/line"
                  className={clsx(
                    "w-full h-[218px] right-0.5 top-0 absolute transition-transform duration-1000 ease-out delay-600",
                    { "translate-x-0": isMounted, "translate-x-4": !isMounted }
                  )}
                />
              )}
              {count === "5" && (
                <img
                  src="imgsrc|3149:207|tremor/line"
                  alt="tremor/line"
                  className={clsx(
                    "w-full h-[218px] right-0.5 top-0 absolute transition-transform duration-1000 ease-out delay-800",
                    { "translate-x-0": isMounted, "translate-x-4": !isMounted }
                  )}
                />
              )}
            </div>
            <div className="w-full flex justify-between items-start gap-1.5 text-xs leading-4 text-center text-sub-foreground">
              <div
                className={clsx(
                  "w-[55px] transition-opacity duration-700 ease-out",
                  { "opacity-100": isMounted, "opacity-0": !isMounted }
                )}
              >
                {xAxisTypeTexts_5[xAxisType]}
              </div>
              <div
                className={clsx(
                  "w-[55px] transition-opacity duration-700 ease-out delay-100",
                  { "opacity-100": isMounted, "opacity-0": !isMounted }
                )}
              >
                {xAxisTypeTexts_6[xAxisType]}
              </div>
              <div
                className={clsx(
                  "w-[55px] transition-opacity duration-700 ease-out delay-200",
                  { "opacity-100": isMounted, "opacity-0": !isMounted }
                )}
              >
                {xAxisTypeTexts_7[xAxisType]}
              </div>
              <div
                className={clsx(
                  "w-[55px] transition-opacity duration-700 ease-out delay-300",
                  { "opacity-100": isMounted, "opacity-0": !isMounted }
                )}
              >
                {xAxisTypeTexts_8[xAxisType]}
              </div>
              <div
                className={clsx(
                  "w-[55px] transition-opacity duration-700 ease-out delay-400",
                  { "opacity-100": isMounted, "opacity-0": !isMounted }
                )}
              >
                {xAxisTypeTexts_9[xAxisType]}
              </div>
              <div
                className={clsx(
                  "w-[55px] transition-opacity duration-700 ease-out delay-500",
                  { "opacity-100": isMounted, "opacity-0": !isMounted }
                )}
              >
                {xAxisTypeTexts_10[xAxisType]}
              </div>
              <div
                className={clsx(
                  "w-[55px] transition-opacity duration-700 ease-out delay-600",
                  { "opacity-100": isMounted, "opacity-0": !isMounted }
                )}
              >
                {xAxisTypeTexts_11[xAxisType]}
              </div>
              <div
                className={clsx(
                  "w-[55px] transition-opacity duration-700 ease-out delay-700",
                  { "opacity-100": isMounted, "opacity-0": !isMounted }
                )}
              >
                {xAxisTypeTexts_12[xAxisType]}
              </div>
              <div
                className={clsx(
                  "w-[55px] transition-opacity duration-700 ease-out delay-800",
                  { "opacity-100": isMounted, "opacity-0": !isMounted }
                )}
              >
                {xAxisTypeTexts_13[xAxisType]}
              </div>
              <div
                className={clsx(
                  "w-[55px] transition-opacity duration-700 ease-out delay-900",
                  { "opacity-100": isMounted, "opacity-0": !isMounted }
                )}
              >
                {xAxisTypeTexts_14[xAxisType]}
              </div>
              <div
                className={clsx(
                  "w-[55px] transition-opacity duration-700 ease-out delay-1000",
                  { "opacity-100": isMounted, "opacity-0": !isMounted }
                )}
              >
                {xAxisTypeTexts_15[xAxisType]}
              </div>
              <div
                className={clsx(
                  "w-[55px] transition-opacity duration-700 ease-out delay-1100",
                  { "opacity-100": isMounted, "opacity-0": !isMounted }
                )}
              >
                {xAxisTypeTexts_16[xAxisType]}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TremorLineChart;