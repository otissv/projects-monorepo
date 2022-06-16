import React, { FC } from 'react';
import { Icon, IconInterface } from "@redesign-system/react/libs";

export const HospitalIcon: FC<IconInterface> = ({
  className,
  ...propsRest
}) => {
  const classNames =  `HospitalIcon ${className}`;
  return (
    <Icon alt="Hospital" className={classNames} {...propsRest}>
      <path d="M18 14H14V18H10V14H6V10H10V6H14V10H18" />

    </Icon>
  );
};
HospitalIcon.displayName = 'HospitalIcon';
  