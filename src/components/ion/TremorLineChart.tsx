// Generated with Ion on 2/19/2024, 9:26:40 AM
// Figma Link: https://www.figma.com/file/LncZWxVTpD4svqEUVk63pC?node-id=3149:187
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
        className
      )}
    >
      <div
        className={clsx({
          "flex items-start gap-3 text-sm font-semibold": true,
          "text-foreground": count === "5",
        })}
      >
        <div
          className={clsx({
            "flex items-center gap-1.5": true,
            "text-foreground":
              count === "1" || count === "2" || count === "3" || count === "4",
          })}
        >
          <img src="imgsrc|I3149:190;3149:9|Dot" alt="Dot" className="h-2" />
          <div>Category 1</div>
        </div>
        {(count === "2" || count === "3" || count === "4" || count === "5") && (
          <div
            className={clsx({
              "flex items-center gap-1.5": true,
              "text-foreground":
                count === "2" || count === "3" || count === "4",
            })}
          >
            <img src="imgsrc|I3149:227;3149:28|Dot" alt="Dot" className="h-2" />
            <div>Category 2</div>
          </div>
        )}
        {(count === "3" || count === "4" || count === "5") && (
          <div
            className={clsx({
              "flex items-center gap-1.5": true,
              "text-foreground": count === "3" || count === "4",
            })}
          >
            <img src="imgsrc|I3149:264;3149:47|Dot" alt="Dot" className="h-2" />
            <div>Category 3</div>
          </div>
        )}
        {(count === "4" || count === "5") && (
          <div
            className={clsx({
              "flex items-center gap-1.5": true,
              "text-foreground": count === "4",
            })}
          >
            <img src="imgsrc|I3149:301;3149:66|Dot" alt="Dot" className="h-2" />
            <div>Category 4</div>
          </div>
        )}
        {count === "5" && (
          <div className="flex items-center gap-1.5">
            <img src="imgsrc|I3149:338;3149:85|Dot" alt="Dot" className="h-2" />
            <div>Category 5</div>
          </div>
        )}
      </div>
      <div className="w-[781px] h-[280px] flex-col flex gap-1">
        <div className="w-full flex-1 flex gap-2">
          <div className="h-full flex-col flex justify-between items-end gap-3.5 pb-6 text-xs leading-4 text-right text-sub-foreground">
            <div>{xAxisTypeTexts[xAxisType]}</div>
            <div>{xAxisTypeTexts_1[xAxisType]}</div>
            <div>{xAxisTypeTexts_2[xAxisType]}</div>
            <div>{xAxisTypeTexts_3[xAxisType]}</div>
            <div>{xAxisTypeTexts_4[xAxisType]}</div>
          </div>
          <div className="relative h-full flex-1 flex-col flex gap-2">
            <div className="w-full flex-1 flex-col flex justify-between gap-[59px] py-1.5">
              <img
                src="imgsrc|3149:201|Grid lines"
                alt="Grid lines"
                className="w-full"
              />
              <img
                src="imgsrc|3149:201|Grid lines"
                alt="Grid lines"
                className="w-full"
              />
              <img
                src="imgsrc|3149:201|Grid lines"
                alt="Grid lines"
                className="w-full"
              />
              <img
                src="imgsrc|3149:201|Grid lines"
                alt="Grid lines"
                className="w-full"
              />
              <img
                src="imgsrc|3149:201|Grid lines"
                alt="Grid lines"
                className="w-full"
              />
            </div>
            <div
              className={clsx({
                "top-[7px] absolute h-[247px] flex-col flex px-0.5 pb-[3px]": true,
                "right-[10px]": yAxisType === "money",
                "right-[28px]": yAxisType === "number",
              })}
            >
              <img
                src="imgsrc|3149:207|tremor/line"
                alt="tremor/line"
                className="w-full h-[218px] right-0.5 top-0 absolute"
              />
              {(count === "2" ||
                count === "3" ||
                count === "4" ||
                count === "5") && (
                <img
                  src="imgsrc|3149:207|tremor/line"
                  alt="tremor/line"
                  className="w-full h-[218px] right-0.5 top-0 absolute"
                />
              )}
              {(count === "3" || count === "4" || count === "5") && (
                <img
                  src="imgsrc|3149:207|tremor/line"
                  alt="tremor/line"
                  className="w-full h-[218px] right-0.5 top-0 absolute"
                />
              )}
              {(count === "4" || count === "5") && (
                <img
                  src="imgsrc|3149:207|tremor/line"
                  alt="tremor/line"
                  className="w-full h-[218px] right-0.5 top-0 absolute"
                />
              )}
              {count === "5" && (
                <img
                  src="imgsrc|3149:207|tremor/line"
                  alt="tremor/line"
                  className="w-full h-[218px] right-0.5 top-0 absolute"
                />
              )}
            </div>
            <div className="w-full flex justify-between items-start gap-1.5 text-xs leading-4 text-center text-sub-foreground">
              <div className="w-[55px]">{xAxisTypeTexts_5[xAxisType]}</div>
              <div className="w-[55px]">{xAxisTypeTexts_6[xAxisType]}</div>
              <div className="w-[55px]">{xAxisTypeTexts_7[xAxisType]}</div>
              <div className="w-[55px]">{xAxisTypeTexts_8[xAxisType]}</div>
              <div className="w-[55px]">{xAxisTypeTexts_9[xAxisType]}</div>
              <div className="w-[55px]">{xAxisTypeTexts_10[xAxisType]}</div>
              <div className="w-[55px]">{xAxisTypeTexts_11[xAxisType]}</div>
              <div className="w-[55px]">{xAxisTypeTexts_12[xAxisType]}</div>
              <div className="w-[55px]">{xAxisTypeTexts_13[xAxisType]}</div>
              <div className="w-[55px]">{xAxisTypeTexts_14[xAxisType]}</div>
              <div className="w-[55px]">{xAxisTypeTexts_15[xAxisType]}</div>
              <div className="w-[55px]">{xAxisTypeTexts_16[xAxisType]}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default TremorLineChart;
