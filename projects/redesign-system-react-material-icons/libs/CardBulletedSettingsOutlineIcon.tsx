import React, { FC } from 'react';
import { Icon, IconInterface } from "@redesign-system/react/libs";

export const CardBulletedSettingsOutlineIcon: FC<IconInterface> = ({
  className,
  ...propsRest
}) => {
  const classNames =  `CardBulletedSettingsOutlineIcon ${className}`;
  return (
    <Icon alt="CardBulletedSettingsOutline" className={classNames} {...propsRest}>
      <path d="M9,22V24H7V22H9M13,22V24H11V22H13M17,22V24H15V22H17M12,15H10V13H12V15M18,15H14V13H18V15M8,11H6V9H8V11M18,11H10V9H18V11M20,20H4A2,2 0 0,1 2,18V6A2,2 0 0,1 4,4H20A2,2 0 0,1 22,6V18A2,2 0 0,1 20,20M4,6V18H20V6H4Z" />

    </Icon>
  );
};
CardBulletedSettingsOutlineIcon.displayName = 'CardBulletedSettingsOutlineIcon';
  