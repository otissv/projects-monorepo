import React, { FC } from 'react';
import { Icon, IconInterface } from "@redesign-system/react/libs";

export const CalendarRemoveIcon: FC<IconInterface> = ({
  className,
  ...propsRest
}) => {
  const classNames =  `CalendarRemoveIcon ${className}`;
  return (
    <Icon alt="CalendarRemove" className={classNames} {...propsRest}>
      <path d="M19,19H5V8H19M19,3H18V1H16V3H8V1H6V3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5A2,2 0 0,0 19,3M9.31,17L11.75,14.56L14.19,17L15.25,15.94L12.81,13.5L15.25,11.06L14.19,10L11.75,12.44L9.31,10L8.25,11.06L10.69,13.5L8.25,15.94L9.31,17Z" />

    </Icon>
  );
};
CalendarRemoveIcon.displayName = 'CalendarRemoveIcon';
  