import React, { FC } from 'react';
import { Icon, IconInterface } from "@redesign-system/react/libs";

export const BatteryChargingWireless50Icon: FC<IconInterface> = ({
  className,
  ...propsRest
}) => {
  const classNames =  `BatteryChargingWireless50Icon ${className}`;
  return (
    <Icon alt="BatteryChargingWireless50" className={classNames} {...propsRest}>
      <path d="M20.07,4.93L18.66,6.34C21.79,9.46 21.79,14.53 18.66,17.66L20.07,19.07C23.97,15.17 23.97,8.84 20.07,4.93M17.24,7.76L15.83,9.17C17.39,10.73 17.39,13.26 15.83,14.83L17.24,16.24C19.58,13.9 19.58,10.1 17.24,7.76M13,4H11V2H5V4H3A1,1 0 0,0 2,5V21A1,1 0 0,0 3,22H13A1,1 0 0,0 14,21V5A1,1 0 0,0 13,4M12,13H4V6H12V13Z" />

    </Icon>
  );
};
BatteryChargingWireless50Icon.displayName = 'BatteryChargingWireless50Icon';
  