import React, { FC } from 'react';
import { Icon, IconInterface } from "@redesign-system/react/libs";

export const SortBoolDescendingIcon: FC<IconInterface> = ({
  className,
  ...propsRest
}) => {
  const classNames =  `SortBoolDescendingIcon ${className}`;
  return (
    <Icon alt="SortBoolDescending" className={classNames} {...propsRest}>
      <path d="M19 7H22L18 3L14 7H17V21H19M5 7C5 8.1 5.9 9 7 9C8.1 9 9 8.1 9 7C9 5.9 8.1 5 7 5C5.9 5 5 5.9 5 7M7 3C9.21 3 11 4.79 11 7C11 9.21 9.21 11 7 11C4.79 11 3 9.21 3 7C3 4.79 4.79 3 7 3M7 13C4.79 13 3 14.79 3 17C3 19.21 4.79 21 7 21C9.21 21 11 19.21 11 17C11 14.79 9.21 13 7 13Z" />

    </Icon>
  );
};
SortBoolDescendingIcon.displayName = 'SortBoolDescendingIcon';
  