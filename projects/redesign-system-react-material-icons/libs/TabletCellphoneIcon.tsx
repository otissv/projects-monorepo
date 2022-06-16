import React, { FC } from 'react';
import { Icon, IconInterface } from "@redesign-system/react/libs";

export const TabletCellphoneIcon: FC<IconInterface> = ({
  className,
  ...propsRest
}) => {
  const classNames =  `TabletCellphoneIcon ${className}`;
  return (
    <Icon alt="TabletCellphone" className={classNames} {...propsRest}>
      <path d="M3,4H20A2,2 0 0,1 22,6V8H18V6H5V18H14V20H3A2,2 0 0,1 1,18V6A2,2 0 0,1 3,4M17,10H23A1,1 0 0,1 24,11V21A1,1 0 0,1 23,22H17A1,1 0 0,1 16,21V11A1,1 0 0,1 17,10M18,12V19H22V12H18Z" />

    </Icon>
  );
};
TabletCellphoneIcon.displayName = 'TabletCellphoneIcon';
  