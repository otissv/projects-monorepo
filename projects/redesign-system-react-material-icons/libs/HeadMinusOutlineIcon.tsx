import React, { FC } from 'react';
import { Icon, IconInterface } from "@redesign-system/react/libs";

export const HeadMinusOutlineIcon: FC<IconInterface> = ({
  className,
  ...propsRest
}) => {
  const classNames =  `HeadMinusOutlineIcon ${className}`;
  return (
    <Icon alt="HeadMinusOutline" className={classNames} {...propsRest}>
      <path d="M13 3C16.9 3 20 6.1 20 10C20 12.8 18.4 15.2 16 16.3V21H9V18H8C6.9 18 6 17.1 6 16V13H4.5C4.1 13 3.8 12.5 4.1 12.2L6 9.7C6.2 5.9 9.2 3 13 3M13 1C8.4 1 4.6 4.4 4.1 8.9L2.5 11C1.9 11.7 1.8 12.7 2.2 13.6C2.6 14.3 3.2 14.8 4 15V16C4 17.9 5.3 19.4 7 19.9V23H18V17.5C20.5 15.9 22 13.1 22 10C22 5 18 1 13 1M17 10H9V8H17V10Z" />

    </Icon>
  );
};
HeadMinusOutlineIcon.displayName = 'HeadMinusOutlineIcon';
  