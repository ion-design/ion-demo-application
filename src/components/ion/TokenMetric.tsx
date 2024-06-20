// Generated with Ion on 6/19/2024, 10:30:32 PM
// Figma Link: https://www.figma.com/design/kQxbDOWBPaC4KqJOhw4JvW?node-id=2:3778
import clsx from "clsx";
type TokenMetricProps = {
  badge: React.ReactNode;
  metric?: string;
  title?: string;
  className?: string;
};

function TokenMetric({
  badge,
  metric = "Metric",
  title = "Title",
  className = "",
}: TokenMetricProps) {
  return (
    <div
      className={clsx(
        "bg-white w-[249px] flex flex-col justify-center gap-1 p-5 rounded-radius border border-gray-200",
        className
      )}
    >
      <div className="text-sm text-base-foreground">{title}</div>
      <div className="w-full flex justify-between items-center">
        <div className="text-xl font-semibold text-base-foreground">
          {metric}
        </div>
        {badge}
      </div>
    </div>
  );
}
export default TokenMetric;
