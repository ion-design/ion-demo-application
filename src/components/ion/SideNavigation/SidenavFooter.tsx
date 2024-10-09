// Generated with Ion on 2/4/2024, 7:46:42 PM
// Figma Link: https://www.figma.com/file/LncZWxVTpD4svqEUVk63pC?node-id=487:10544
import clsx from 'clsx';
import { useEffect, useState } from 'react';

type IonSideNavigationFooterProps = {
  content: React.ReactNode;
  collapsed?: boolean;
  className?: string;
};

function SidenavFooter({
  content,
  collapsed = false,
  className = '',
}: IonSideNavigationFooterProps) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    // Trigger the animation after the component mounts
    setIsMounted(true);
  }, []);

  return (
    <div
      className={clsx(
        'bg-base w-full flex items-center gap-2.5 px-3 h-fit transition-opacity duration-500',
        {
          'opacity-100': isMounted,
          'opacity-0': !isMounted,
        },
        className
      )}
    >
      <div
        className={clsx(
          'flex-1 flex items-center px-1 py-3 border-t border-soft-stroke w-[244px] transition-width duration-300 ease-in-out',
          {
            'w-60': !collapsed,
            'w-48': collapsed,
          }
        )}
      >
        <div className="transition-transform duration-300 ease-in-out transform hover:scale-105">
          {content}
        </div>
      </div>
    </div>
  );
}

export default SidenavFooter;