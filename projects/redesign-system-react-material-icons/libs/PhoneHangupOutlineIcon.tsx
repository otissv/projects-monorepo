import React, { FC } from 'react';
import { Icon, IconInterface } from "@redesign-system/react/libs";

export const PhoneHangupOutlineIcon: FC<IconInterface> = ({
  className,
  ...propsRest
}) => {
  const classNames =  `PhoneHangupOutlineIcon ${className}`;
  return (
    <Icon alt="PhoneHangupOutline" className={classNames} {...propsRest}>
      <path d="M23.71 11.67A17 17 0 0 0 .29 11.67A1 1 0 0 0 0 12.38A1 1 0 0 0 .29 13.08L2.77 15.56A1 1 0 0 0 3.5 15.85A1 1 0 0 0 4.18 15.57A11.5 11.5 0 0 1 6.84 13.72A1 1 0 0 0 7.4 12.82V9.72A14.91 14.91 0 0 1 12 9A14.5 14.5 0 0 1 16.59 9.73V12.83A1 1 0 0 0 17.15 13.73A11.27 11.27 0 0 1 19.82 15.58A1 1 0 0 0 20.5 15.86A1 1 0 0 0 21.23 15.57L23.71 13.09A1 1 0 0 0 23.71 11.67M5.4 12.22A13.68 13.68 0 0 0 3.53 13.5L2.46 12.42A15.54 15.54 0 0 1 5.4 10.5M20.5 13.5A13.75 13.75 0 0 0 18.6 12.23V10.53A14.26 14.26 0 0 1 21.55 12.43Z" />

    </Icon>
  );
};
PhoneHangupOutlineIcon.displayName = 'PhoneHangupOutlineIcon';
  