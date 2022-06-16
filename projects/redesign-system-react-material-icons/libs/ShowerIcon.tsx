import React, { FC } from 'react';
import { Icon, IconInterface } from "@redesign-system/react/libs";

export const ShowerIcon: FC<IconInterface> = ({
  className,
  ...propsRest
}) => {
  const classNames =  `ShowerIcon ${className}`;
  return (
    <Icon alt="Shower" className={classNames} {...propsRest}>
      <path d="M21,14V15C21,16.91 19.93,18.57 18.35,19.41L19,22H17L16.5,20C16.33,20 16.17,20 16,20H8C7.83,20 7.67,20 7.5,20L7,22H5L5.65,19.41C4.07,18.57 3,16.91 3,15V14H2V12H20V5A1,1 0 0,0 19,4C18.5,4 18.12,4.34 18,4.79C18.63,5.33 19,6.13 19,7H13A3,3 0 0,1 16,4C16.06,4 16.11,4 16.17,4C16.58,2.84 17.69,2 19,2A3,3 0 0,1 22,5V14H21V14M19,14H5V15A3,3 0 0,0 8,18H16A3,3 0 0,0 19,15V14Z" />

    </Icon>
  );
};
ShowerIcon.displayName = 'ShowerIcon';
  