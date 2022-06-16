import React, { FC } from 'react';
import { Icon, IconInterface } from "@redesign-system/react/libs";

export const FolderTableOutlineIcon: FC<IconInterface> = ({
  className,
  ...propsRest
}) => {
  const classNames =  `FolderTableOutlineIcon ${className}`;
  return (
    <Icon alt="FolderTableOutline" className={classNames} {...propsRest}>
      <path d="M4 4C2.89 4 2 4.89 2 6V18A2 2 0 0 0 4 20H20A2 2 0 0 0 22 18V8C22 6.89 21.1 6 20 6H12L10 4H4M4 8H20V18H4V8M12 9V11H15V9H12M16 9V11H19V9H16M12 12V14H15V12H12M16 12V14H19V12H16M12 15V17H15V15H12M16 15V17H19V15H16Z" />

    </Icon>
  );
};
FolderTableOutlineIcon.displayName = 'FolderTableOutlineIcon';
  