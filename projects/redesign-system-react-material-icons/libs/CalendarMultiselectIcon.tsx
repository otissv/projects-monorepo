import React, { FC } from 'react';
import { Icon, IconInterface } from "@redesign-system/react/libs";

export const CalendarMultiselectIcon: FC<IconInterface> = ({
  className,
  ...propsRest
}) => {
  const classNames =  `CalendarMultiselectIcon ${className}`;
  return (
    <Icon alt="CalendarMultiselect" className={classNames} {...propsRest}>
      <path d="M19,19V8H5V19H19M16,1H18V3H19A2,2 0 0,1 21,5V19A2,2 0 0,1 19,21H5C3.89,21 3,20.1 3,19V5C3,3.89 3.89,3 5,3H6V1H8V3H16V1M7,10H9V12H7V10M15,10H17V12H15V10M11,14H13V16H11V14M15,14H17V16H15V14Z" />

    </Icon>
  );
};
CalendarMultiselectIcon.displayName = 'CalendarMultiselectIcon';
  