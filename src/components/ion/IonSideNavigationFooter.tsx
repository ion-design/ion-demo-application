// Generated with Ion on 6/19/2024, 10:30:32 PM
// Figma Link: https://www.figma.com/design/kQxbDOWBPaC4KqJOhw4JvW?node-id=487:10544
import clsx from "clsx";
import { useEffect, useState } from "react";

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
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <div
      className={clsx(
        "bg-white w-full flex items-center gap-2.5 px-3 transition-colors duration-300 ease-in-out",
        {
          "shadow-lg": !collapsed,
          "shadow-md": collapsed,
        },
        className,
        { "opacity-100 translate-y-0": isMounted, "opacity-0 translate-y-4": !isMounted }
      )}
      style={{
        transition:
          "opacity 300ms ease-in-out, transform 300ms ease-in-out, box-shadow 300ms ease-in-out",
      }}
    >
      <div
        className={clsx(
          "flex-1 w-full flex items-center px-1 py-3 border-t border-gray-200 transition-all duration-300 ease-in-out",
          {
            "opacity-100": !collapsed,
            "opacity-50": collapsed,
          }
        )}
      >
        {content}
      </div>
    </div>
  );
}

export default IonSideNavigationFooter;