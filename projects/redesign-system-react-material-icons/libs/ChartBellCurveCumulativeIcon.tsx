import React, { FC } from 'react';
import { Icon, IconInterface } from "@redesign-system/react/libs";

export const ChartBellCurveCumulativeIcon: FC<IconInterface> = ({
  className,
  ...propsRest
}) => {
  const classNames =  `ChartBellCurveCumulativeIcon ${className}`;
  return (
    <Icon alt="ChartBellCurveCumulative" className={classNames} {...propsRest}>
      <path d="M4 19V20H22V22H2V2H4V17C7 17 10 15 12.1 11.4C15.1 6.4 18.4 4 22 4V6C19.2 6 16.5 8.1 13.9 12.5C11.3 16.6 7.7 19 4 19Z" />

    </Icon>
  );
};
ChartBellCurveCumulativeIcon.displayName = 'ChartBellCurveCumulativeIcon';
  