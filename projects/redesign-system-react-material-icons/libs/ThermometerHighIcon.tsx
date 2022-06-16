import React, { FC } from 'react';
import { Icon, IconInterface } from "@redesign-system/react/libs";

export const ThermometerHighIcon: FC<IconInterface> = ({
  className,
  ...propsRest
}) => {
  const classNames =  `ThermometerHighIcon ${className}`;
  return (
    <Icon alt="ThermometerHigh" className={classNames} {...propsRest}>
      <path d="M15 13V5A3 3 0 0 0 9 5V13A5 5 0 1 0 15 13M12 4A1 1 0 0 1 13 5H11A1 1 0 0 1 12 4Z" />

    </Icon>
  );
};
ThermometerHighIcon.displayName = 'ThermometerHighIcon';
  