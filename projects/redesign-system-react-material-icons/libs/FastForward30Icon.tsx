import React, { FC } from 'react';
import { Icon, IconInterface } from "@redesign-system/react/libs";

export const FastForward30Icon: FC<IconInterface> = ({
  className,
  ...propsRest
}) => {
  const classNames =  `FastForward30Icon ${className}`;
  return (
    <Icon alt="FastForward30" className={classNames} {...propsRest}>
      <path d="M11.5,3C6.85,3 2.92,6.03 1.53,10.22L3.9,11C4.95,7.81 7.96,5.5 11.5,5.5C13.46,5.5 15.23,6.22 16.62,7.38L14,10H21V3L18.4,5.6C16.55,4 14.15,3 11.5,3M19,14V20C19,21.11 18.11,22 17,22H15A2,2 0 0,1 13,20V14A2,2 0 0,1 15,12H17C18.11,12 19,12.9 19,14M15,14V20H17V14H15M11,20C11,21.11 10.1,22 9,22H5V20H9V18H7V16H9V14H5V12H9A2,2 0 0,1 11,14V15.5A1.5,1.5 0 0,1 9.5,17A1.5,1.5 0 0,1 11,18.5V20Z" />

    </Icon>
  );
};
FastForward30Icon.displayName = 'FastForward30Icon';
  