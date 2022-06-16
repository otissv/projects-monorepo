import React, { FC } from 'react';
import { Icon, IconInterface } from "@redesign-system/react/libs";

export const CoatRackIcon: FC<IconInterface> = ({
  className,
  ...propsRest
}) => {
  const classNames =  `CoatRackIcon ${className}`;
  return (
    <Icon alt="CoatRack" className={classNames} {...propsRest}>
      <path d="M18.33 7.78A1 1 0 0 0 16.66 8.89A2 2 0 1 1 13 10V7.82A3 3 0 1 0 11 7.82V10A2 2 0 1 1 7.34 8.89A1 1 0 1 0 5.67 7.78A4 4 0 0 0 11 13.46V20A2 2 0 0 0 9 22H15A2 2 0 0 0 13 20V13.46A4 4 0 0 0 18.33 7.78M12 4A1 1 0 1 1 11 5A1 1 0 0 1 12 4Z" />

    </Icon>
  );
};
CoatRackIcon.displayName = 'CoatRackIcon';
  