import React, { FC } from 'react';
import { Icon, IconInterface } from "@redesign-system/react/libs";

export const FileHiddenIcon: FC<IconInterface> = ({
  className,
  ...propsRest
}) => {
  const classNames =  `FileHiddenIcon ${className}`;
  return (
    <Icon alt="FileHidden" className={classNames} {...propsRest}>
      <path d="M13,9H14V11H11V7H13V9M18.5,9L16.38,6.88L17.63,5.63L20,8V10H18V11H15V9H18.5M13,3.5V2H12V4H13V6H11V4H9V2H8V4H6V5H4V4C4,2.89 4.89,2 6,2H14L16.36,4.36L15.11,5.61L13,3.5M20,20A2,2 0 0,1 18,22H16V20H18V19H20V20M18,15H20V18H18V15M12,22V20H15V22H12M8,22V20H11V22H8M6,22C4.89,22 4,21.1 4,20V18H6V20H7V22H6M4,14H6V17H4V14M4,10H6V13H4V10M18,11H20V14H18V11M4,6H6V9H4V6Z" />

    </Icon>
  );
};
FileHiddenIcon.displayName = 'FileHiddenIcon';
  