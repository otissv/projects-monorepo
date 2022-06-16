import React, { FC } from 'react';
import { Icon, IconInterface } from "@redesign-system/react/libs";

export const HeadphonesIcon: FC<IconInterface> = ({
  className,
  ...propsRest
}) => {
  const classNames =  `HeadphonesIcon ${className}`;
  return (
    <Icon alt="Headphones" className={classNames} {...propsRest}>
      <path d="M12,1C7,1 3,5 3,10V17A3,3 0 0,0 6,20H9V12H5V10A7,7 0 0,1 12,3A7,7 0 0,1 19,10V12H15V20H18A3,3 0 0,0 21,17V10C21,5 16.97,1 12,1Z" />

    </Icon>
  );
};
HeadphonesIcon.displayName = 'HeadphonesIcon';
  