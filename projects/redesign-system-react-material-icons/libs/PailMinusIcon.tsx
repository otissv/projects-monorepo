import React, { FC } from 'react';
import { Icon, IconInterface } from "@redesign-system/react/libs";

export const PailMinusIcon: FC<IconInterface> = ({
  className,
  ...propsRest
}) => {
  const classNames =  `PailMinusIcon ${className}`;
  return (
    <Icon alt="PailMinus" className={classNames} {...propsRest}>
      <path d="M12.5 9.36L4.27 14.11C3.79 14.39 3.18 14.23 2.9 13.75C2.62 13.27 2.79 12.66 3.27 12.38L11.5 7.63C11.97 7.35 12.58 7.5 12.86 8C13.14 8.47 12.97 9.09 12.5 9.36M13 19C13 15.82 15.47 13.23 18.6 13L20 6H21V4H3V6H4L4.76 9.79L10.71 6.36C11.09 6.13 11.53 6 12 6C13.38 6 14.5 7.12 14.5 8.5C14.5 9.44 14 10.26 13.21 10.69L5.79 14.97L7 21H13.35C13.13 20.37 13 19.7 13 19M15 18V20H23V18H15Z" />

    </Icon>
  );
};
PailMinusIcon.displayName = 'PailMinusIcon';
  