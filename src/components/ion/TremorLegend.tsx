// Generated with Ion on 2/19/2024, 9:26:40 AM
// Figma Link: https://www.figma.com/file/LncZWxVTpD4svqEUVk63pC?node-id=3149:6
import clsx from "clsx";
type TremorLegendProps = {
  categoryFourName?: string;
  categoryThreeName?: string;
  categoryTwoName?: string;
  categoryFiveName?: string;
  categoryOneName?: string;
  count?: "2" | "1" | "3" | "4" | "5";
  className?: string;
};

function TremorLegend({
  categoryFourName = "Category 4",
  categoryThreeName = "Category 3",
  categoryTwoName = "Category 2",
  categoryFiveName = "Category 5",
  categoryOneName = "Category 1",
  count = "1",
  className = "",
}: TremorLegendProps) {
  return (
    <div
      className={clsx(
        {
          "flex items-start gap-3 h-fit text-sm font-semibold": true,
          "text-foreground": count === "5",
        },
        className
      )}
    >
      <div
        className={clsx({
          "flex items-center gap-1.5": true,
          "text-foreground":
            count === "1" || count === "2" || count === "3" || count === "4",
        })}
      >
        <img src="imgsrc|3149:9|Dot" alt="Dot" className="h-2" />
        <div>{categoryOneName}</div>
      </div>
      {(count === "2" || count === "3" || count === "4" || count === "5") && (
        <div
          className={clsx({
            "flex items-center gap-1.5": true,
            "text-foreground": count === "2" || count === "3" || count === "4",
          })}
        >
          <img src="imgsrc|3149:9|Dot" alt="Dot" className="h-2" />
          <div>{categoryTwoName}</div>
        </div>
      )}
      {(count === "3" || count === "4" || count === "5") && (
        <div
          className={clsx({
            "flex items-center gap-1.5": true,
            "text-foreground": count === "3" || count === "4",
          })}
        >
          <img src="imgsrc|3149:9|Dot" alt="Dot" className="h-2" />
          <div>{categoryThreeName}</div>
        </div>
      )}
      {(count === "4" || count === "5") && (
        <div
          className={clsx({
            "flex items-center gap-1.5": true,
            "text-foreground": count === "4",
          })}
        >
          <img src="imgsrc|3149:9|Dot" alt="Dot" className="h-2" />
          <div>{categoryFourName}</div>
        </div>
      )}
      {count === "5" && (
        <div className="flex items-center gap-1.5">
          <img src="imgsrc|3149:9|Dot" alt="Dot" className="h-2" />
          <div>{categoryFiveName}</div>
        </div>
      )}
    </div>
  );
}
export default TremorLegend;
