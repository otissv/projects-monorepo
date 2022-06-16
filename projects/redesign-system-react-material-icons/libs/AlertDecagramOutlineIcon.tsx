import React, { FC } from 'react';
import { Icon, IconInterface } from "@redesign-system/react/libs";

export const AlertDecagramOutlineIcon: FC<IconInterface> = ({
  className,
  ...propsRest
}) => {
  const classNames =  `AlertDecagramOutlineIcon ${className}`;
  return (
    <Icon alt="AlertDecagramOutline" className={classNames} {...propsRest}>
      <path d="M23,12L20.56,14.78L20.9,18.46L17.29,19.28L15.4,22.46L12,21L8.6,22.47L6.71,19.29L3.1,18.47L3.44,14.78L1,12L3.44,9.21L3.1,5.53L6.71,4.72L8.6,1.54L12,3L15.4,1.54L17.29,4.72L20.9,5.54L20.56,9.22L23,12M20.33,12L18.5,9.89L18.74,7.1L16,6.5L14.58,4.07L12,5.18L9.42,4.07L8,6.5L5.26,7.09L5.5,9.88L3.67,12L5.5,14.1L5.26,16.9L8,17.5L9.42,19.93L12,18.81L14.58,19.92L16,17.5L18.74,16.89L18.5,14.1L20.33,12M11,15H13V17H11V15M11,7H13V13H11V7" />

    </Icon>
  );
};
AlertDecagramOutlineIcon.displayName = 'AlertDecagramOutlineIcon';
  