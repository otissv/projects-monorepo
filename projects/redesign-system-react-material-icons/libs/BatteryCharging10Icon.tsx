import React, { FC } from 'react';
import { Icon, IconInterface } from "@redesign-system/react/libs";

export const BatteryCharging10Icon: FC<IconInterface> = ({
  className,
  ...propsRest
}) => {
  const classNames =  `BatteryCharging10Icon ${className}`;
  return (
    <Icon alt="BatteryCharging10" className={classNames} {...propsRest}>
      <path d="M23.05,11H20.05V4L15.05,14H18.05V22M12,18H4L4.05,6H12.05M12.72,4H11.05V2H5.05V4H3.38A1.33,1.33 0 0,0 2.05,5.33V20.67C2.05,21.4 2.65,22 3.38,22H12.72C13.45,22 14.05,21.4 14.05,20.67V5.33A1.33,1.33 0 0,0 12.72,4Z" />

    </Icon>
  );
};
BatteryCharging10Icon.displayName = 'BatteryCharging10Icon';
  