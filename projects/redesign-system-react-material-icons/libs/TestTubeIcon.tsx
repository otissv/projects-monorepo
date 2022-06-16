import React, { FC } from 'react';
import { Icon, IconInterface } from "@redesign-system/react/libs";

export const TestTubeIcon: FC<IconInterface> = ({
  className,
  ...propsRest
}) => {
  const classNames =  `TestTubeIcon ${className}`;
  return (
    <Icon alt="TestTube" className={classNames} {...propsRest}>
      <path d="M7,2V4H8V18A4,4 0 0,0 12,22A4,4 0 0,0 16,18V4H17V2H7M11,16C10.4,16 10,15.6 10,15C10,14.4 10.4,14 11,14C11.6,14 12,14.4 12,15C12,15.6 11.6,16 11,16M13,12C12.4,12 12,11.6 12,11C12,10.4 12.4,10 13,10C13.6,10 14,10.4 14,11C14,11.6 13.6,12 13,12M14,7H10V4H14V7Z" />

    </Icon>
  );
};
TestTubeIcon.displayName = 'TestTubeIcon';
  