import React, { FC } from 'react';
import { Icon, IconInterface } from "@redesign-system/react/libs";

export const AugmentedRealityIcon: FC<IconInterface> = ({
  className,
  ...propsRest
}) => {
  const classNames =  `AugmentedRealityIcon ${className}`;
  return (
    <Icon alt="AugmentedReality" className={classNames} {...propsRest}>
      <path d="M5,3C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5A2,2 0 0,0 19,3H5M7,9H10C10.6,9 11,9.5 11,10V15H9.5V13.5H7.5V15H6V10C6,9.5 6.4,9 7,9M13,9H16.5C17.35,9 18,9.65 18,10.5V11.5C18,12.1 17.6,12.65 17.1,12.9L18,15H16.5L15.65,13H14.5V15H13V9M7.5,10.5V12H9.5V10.5H7.5M14.5,10.5V11.5H16.5V10.5H14.5" />

    </Icon>
  );
};
AugmentedRealityIcon.displayName = 'AugmentedRealityIcon';
  