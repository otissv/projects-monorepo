import React, { FC } from 'react';
import { Icon, IconInterface } from "@redesign-system/react/libs";

export const MicrosoftXboxControllerBatteryMediumIcon: FC<IconInterface> = ({
  className,
  ...propsRest
}) => {
  const classNames =  `MicrosoftXboxControllerBatteryMediumIcon ${className}`;
  return (
    <Icon alt="MicrosoftXboxControllerBatteryMedium" className={classNames} {...propsRest}>
      <path d="M21,12V7H15V12H21M21.67,5C22.4,5 23,5.6 23,6.33V19.67A1.33,1.33 0 0,1 21.67,21H14.33C13.6,21 13,20.4 13,19.67V16.75H7.75C5.75,16.75 5,19 3,20C1,20 -0.5,17 3.5,8.5H3.75L4.19,7.67C4.19,7.67 7,6 8.33,7.23H13V6.33A1.33,1.33 0 0,1 14.33,5H16V3H20V5H21.67M11,8A1,1 0 0,0 10,9A1,1 0 0,0 11,10A1,1 0 0,0 12,9A1,1 0 0,0 11,8Z" />

    </Icon>
  );
};
MicrosoftXboxControllerBatteryMediumIcon.displayName = 'MicrosoftXboxControllerBatteryMediumIcon';
  