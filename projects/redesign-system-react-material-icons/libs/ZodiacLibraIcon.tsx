import React, { FC } from 'react';
import { Icon, IconInterface } from "@redesign-system/react/libs";

export const ZodiacLibraIcon: FC<IconInterface> = ({
  className,
  ...propsRest
}) => {
  const classNames =  `ZodiacLibraIcon ${className}`;
  return (
    <Icon alt="ZodiacLibra" className={classNames} {...propsRest}>
      <path d="M20,16V18H13V15.91C16,15.36 17.96,12.5 17.41,9.5C16.86,6.5 14,4.54 11,5.09C8,5.65 6.04,8.5 6.59,11.5C7,13.74 8.76,15.5 11,15.91V18H4V16H6.92C5.37,14.59 4.5,12.59 4.5,10.5A7.5,7.5 0 0,1 12,3A7.5,7.5 0 0,1 19.5,10.5C19.5,12.59 18.63,14.59 17.08,16H20M20,19H4V21H20V19Z" />

    </Icon>
  );
};
ZodiacLibraIcon.displayName = 'ZodiacLibraIcon';
  