import React, { FC } from 'react';
import { Icon, IconInterface } from "@redesign-system/react/libs";

export const DecimalIcon: FC<IconInterface> = ({
  className,
  ...propsRest
}) => {
  const classNames =  `DecimalIcon ${className}`;
  return (
    <Icon alt="Decimal" className={classNames} {...propsRest}>
      <path d="M10 7A3 3 0 0 0 7 10V13A3 3 0 0 0 13 13V10A3 3 0 0 0 10 7M11 13A1 1 0 0 1 9 13V10A1 1 0 0 1 11 10M17 7A3 3 0 0 0 14 10V13A3 3 0 0 0 20 13V10A3 3 0 0 0 17 7M18 13A1 1 0 0 1 16 13V10A1 1 0 0 1 18 10M6 15A1 1 0 1 1 5 14A1 1 0 0 1 6 15Z" />

    </Icon>
  );
};
DecimalIcon.displayName = 'DecimalIcon';
  