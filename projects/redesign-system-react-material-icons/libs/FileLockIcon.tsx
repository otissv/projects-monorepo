import React, { FC } from 'react';
import { Icon, IconInterface } from "@redesign-system/react/libs";

export const FileLockIcon: FC<IconInterface> = ({
  className,
  ...propsRest
}) => {
  const classNames =  `FileLockIcon ${className}`;
  return (
    <Icon alt="FileLock" className={classNames} {...propsRest}>
      <path d="M6,2C4.89,2 4,2.9 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2H6M13,3.5L18.5,9H13V3.5M12,11A3,3 0 0,1 15,14V15H16V19H8V15H9V14C9,12.36 10.34,11 12,11M12,13A1,1 0 0,0 11,14V15H13V14C13,13.47 12.55,13 12,13Z" />

    </Icon>
  );
};
FileLockIcon.displayName = 'FileLockIcon';
  