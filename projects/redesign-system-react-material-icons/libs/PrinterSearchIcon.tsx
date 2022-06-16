import React, { FC } from 'react';
import { Icon, IconInterface } from "@redesign-system/react/libs";

export const PrinterSearchIcon: FC<IconInterface> = ({
  className,
  ...propsRest
}) => {
  const classNames =  `PrinterSearchIcon ${className}`;
  return (
    <Icon alt="PrinterSearch" className={classNames} {...propsRest}>
      <path d="M20.3 18.9C20.7 18.2 21 17.4 21 16.5C21 14 19 12 16.5 12S12 14 12 16.5 14 21 16.5 21C17.4 21 18.2 20.8 18.9 20.3L22 23.4L23.4 22L20.3 18.9M16.5 19C15.1 19 14 17.9 14 16.5S15.1 14 16.5 14 19 15.1 19 16.5 17.9 19 16.5 19M18 7H6V3H18V7M6 21V17H2V11C2 9.3 3.3 8 5 8H19C20.7 8 22 9.3 22 11V13C20.8 11.2 18.8 10 16.5 10C13.8 10 11.5 11.7 10.5 14H8V19H10.5C10.8 19.7 11.3 20.4 11.8 21H6Z" />

    </Icon>
  );
};
PrinterSearchIcon.displayName = 'PrinterSearchIcon';
  