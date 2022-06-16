import React, { FC } from 'react';
import { Icon, IconInterface } from "@redesign-system/react/libs";

export const CarBackIcon: FC<IconInterface> = ({
  className,
  ...propsRest
}) => {
  const classNames =  `CarBackIcon ${className}`;
  return (
    <Icon alt="CarBack" className={classNames} {...propsRest}>
      <path d="M6,11L7,7H17L18,11M18.92,6C18.71,5.4 18.14,5 17.5,5H6.5C5.86,5 5.29,5.4 5.08,6L3,12V20A1,1 0 0,0 4,21H5A1,1 0 0,0 6,20V18H18V20A1,1 0 0,0 19,21H20A1,1 0 0,0 21,20V12L18.92,6M7,16H5V14H7V16M19,16H17V14H19V16M14,16H10V14H14V16Z" />

    </Icon>
  );
};
CarBackIcon.displayName = 'CarBackIcon';
  