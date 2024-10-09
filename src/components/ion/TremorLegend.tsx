// Generated with Ion on 2/19/2024, 9:26:40 AM
// Figma Link: https://www.figma.com/file/LncZWxVTpD4svqEUVk63pC?node-id=3149:6
import { useEffect, useState } from "react";
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
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    // Trigger the animation on mount
    setIsMounted(true);
  }, []);

  return (
    <div
      className={clsx(
        "flex items-start gap-3 h-fit text-sm font-semibold transition-opacity duration-700 ease-in-out",
        {
          "text-foreground opacity-100": isMounted && count === "5",
          "opacity-0": !isMounted,
        },
        className
      )}
      style={{
        transitionDelay: isMounted ? "0ms" : "0ms",
      }}
    >
      <div
        className={clsx(
          "flex items-center gap-1.5 transition-opacity transform duration-500 ease-in-out",
          {
            "text-foreground opacity-100 translate-y-0": isMounted && true,
            "opacity-0 translate-y-4": !isMounted,
          }
        )}
        style={{
          transitionDelay: isMounted ? "100ms" : "0ms",
        }}
      >
        <img src="imgsrc|3149:9|Dot" alt="Dot" className="h-2" />
        <div>{categoryOneName}</div>
      </div>
      {(count === "2" || count === "3" || count === "4" || count === "5") && (
        <div
          className={clsx(
            "flex items-center gap-1.5 transition-opacity transform duration-500 ease-in-out",
            {
              "text-foreground opacity-100 translate-y-0": isMounted && (count === "2" || count === "3" || count === "4"),
              "opacity-0 translate-y-4": !isMounted,
            }
          )}
          style={{
            transitionDelay: isMounted ? "200ms" : "0ms",
          }}
        >
          <img src="imgsrc|3149:9|Dot" alt="Dot" className="h-2" />
          <div>{categoryTwoName}</div>
        </div>
      )}
      {(count === "3" || count === "4" || count === "5") && (
        <div
          className={clsx(
            "flex items-center gap-1.5 transition-opacity transform duration-500 ease-in-out",
            {
              "text-foreground opacity-100 translate-y-0": isMounted && (count === "3" || count === "4"),
              "opacity-0 translate-y-4": !isMounted,
            }
          )}
          style={{
            transitionDelay: isMounted ? "300ms" : "0ms",
          }}
        >
          <img src="imgsrc|3149:9|Dot" alt="Dot" className="h-2" />
          <div>{categoryThreeName}</div>
        </div>
      )}
      {(count === "4" || count === "5") && (
        <div
          className={clsx(
            "flex items-center gap-1.5 transition-opacity transform duration-500 ease-in-out",
            {
              "text-foreground opacity-100 translate-y-0": isMounted && count === "4",
              "opacity-0 translate-y-4": !isMounted,
            }
          )}
          style={{
            transitionDelay: isMounted ? "400ms" : "0ms",
          }}
        >
          <img src="imgsrc|3149:9|Dot" alt="Dot" className="h-2" />
          <div>{categoryFourName}</div>
        </div>
      )}
      {count === "5" && (
        <div
          className="flex items-center gap-1.5 transition-opacity transform duration-500 ease-in-out opacity-100 translate-y-0"
          style={{
            transitionDelay: isMounted ? "500ms" : "0ms",
            opacity: isMounted ? 1 : 0,
            transform: isMounted ? "translateY(0)" : "translateY(1rem)",
          }}
        >
          <img src="imgsrc|3149:9|Dot" alt="Dot" className="h-2" />
          <div>{categoryFiveName}</div>
        </div>
      )}
    </div>
  );
}

export default TremorLegend;