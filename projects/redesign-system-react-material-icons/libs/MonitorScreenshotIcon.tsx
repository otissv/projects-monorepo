import React, { FC } from 'react';
import { Icon, IconInterface } from "@redesign-system/react/libs";

export const MonitorScreenshotIcon: FC<IconInterface> = ({
  className,
  ...propsRest
}) => {
  const classNames =  `MonitorScreenshotIcon ${className}`;
  return (
    <Icon alt="MonitorScreenshot" className={classNames} {...propsRest}>
      <path d="M9,6H5V10H7V8H9M19,10H17V12H15V14H19M21,16H3V4H21M21,2H3C1.89,2 1,2.89 1,4V16A2,2 0 0,0 3,18H10V20H8V22H16V20H14V18H21A2,2 0 0,0 23,16V4C23,2.89 22.1,2 21,2" />

    </Icon>
  );
};
MonitorScreenshotIcon.displayName = 'MonitorScreenshotIcon';
  