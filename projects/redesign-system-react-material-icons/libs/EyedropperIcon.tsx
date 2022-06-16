import React, { FC } from 'react';
import { Icon, IconInterface } from "@redesign-system/react/libs";

export const EyedropperIcon: FC<IconInterface> = ({
  className,
  ...propsRest
}) => {
  const classNames =  `EyedropperIcon ${className}`;
  return (
    <Icon alt="Eyedropper" className={classNames} {...propsRest}>
      <path d="M19.35,11.72L17.22,13.85L15.81,12.43L8.1,20.14L3.5,22L2,20.5L3.86,15.9L11.57,8.19L10.15,6.78L12.28,4.65L19.35,11.72M16.76,3C17.93,1.83 19.83,1.83 21,3C22.17,4.17 22.17,6.07 21,7.24L19.08,9.16L14.84,4.92L16.76,3M5.56,17.03L4.5,19.5L6.97,18.44L14.4,11L13,9.6L5.56,17.03Z" />

    </Icon>
  );
};
EyedropperIcon.displayName = 'EyedropperIcon';
  