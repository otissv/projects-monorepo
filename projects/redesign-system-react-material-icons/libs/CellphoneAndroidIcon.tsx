import React, { FC } from 'react';
import { Icon, IconInterface } from "@redesign-system/react/libs";

export const CellphoneAndroidIcon: FC<IconInterface> = ({
  className,
  ...propsRest
}) => {
  const classNames =  `CellphoneAndroidIcon ${className}`;
  return (
    <Icon alt="CellphoneAndroid" className={classNames} {...propsRest}>
      <path d="M17.25,18H6.75V4H17.25M14,21H10V20H14M16,1H8A3,3 0 0,0 5,4V20A3,3 0 0,0 8,23H16A3,3 0 0,0 19,20V4A3,3 0 0,0 16,1Z" />

    </Icon>
  );
};
CellphoneAndroidIcon.displayName = 'CellphoneAndroidIcon';
  