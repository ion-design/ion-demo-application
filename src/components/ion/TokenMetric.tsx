// Generated with Ion on 6/19/2024, 10:30:32 PM
// Figma Link: https://www.figma.com/design/kQxbDOWBPaC4KqJOhw4JvW?node-id=2:3778
import clsx from "clsx";
import { motion } from "framer-motion";

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
    <motion.div
      className={clsx(
        "bg-white w-[249px] flex flex-col justify-center gap-1 p-5 rounded-radius border border-gray-200",
        className
      )}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      whileHover={{ scale: 1.02, boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)" }}
    >
      <div className="text-sm text-base-foreground">{title}</div>
      <div className="w-full flex justify-between items-center">
        <div className="text-xl font-semibold text-base-foreground">
          {metric}
        </div>
        {badge}
      </div>
    </motion.div>
  );
}
export default TokenMetric;