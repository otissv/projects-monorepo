import React, { FC } from 'react';
import { Icon, IconInterface } from "@redesign-system/react/libs";

export const StickerAlertOutlineIcon: FC<IconInterface> = ({
  className,
  ...propsRest
}) => {
  const classNames =  `StickerAlertOutlineIcon ${className}`;
  return (
    <Icon alt="StickerAlertOutline" className={classNames} {...propsRest}>
      <path d="M11 14H13V16H11V14M11 12.5H13V8H11V12.5M22 5.5V16L16 22H5.5C3.6 22 2 20.4 2 18.5V5.5C2 3.6 3.6 2 5.5 2H18.5C20.4 2 22 3.6 22 5.5M20 5.8C20 4.8 19.2 4 18.2 4H5.8C4.8 4 4 4.8 4 5.8V18.3C4 19.3 4.8 20.1 5.8 20.1H15V18.6C15 16.7 16.6 15.1 18.5 15.1H20V5.8Z" />

    </Icon>
  );
};
StickerAlertOutlineIcon.displayName = 'StickerAlertOutlineIcon';
  