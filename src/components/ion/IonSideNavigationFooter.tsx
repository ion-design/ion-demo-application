// Generated with Ion on 6/19/2024, 10:30:32 PM
// Figma Link: https://www.figma.com/design/kQxbDOWBPaC4KqJOhw4JvW?node-id=487:10544
import clsx from "clsx";
type IonSideNavigationFooterProps = {
  content: React.ReactNode;
  collapsed?: boolean;
  className?: string;
};

function IonSideNavigationFooter({
  content,
  collapsed = false,
  className = "",
}: IonSideNavigationFooterProps) {
  return (
    <div
      className={clsx(
        "bg-white w-full flex items-center gap-2.5 px-3",
        className
      )}
    >
      <div className="flex-1 w-full flex items-center px-1 py-3 border-t border-gray-200">
        {content}
      </div>
    </div>
  );
}
export default IonSideNavigationFooter;
