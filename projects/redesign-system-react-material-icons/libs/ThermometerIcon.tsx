import React, { FC } from 'react';
import { Icon, IconInterface } from "@redesign-system/react/libs";

export const ThermometerIcon: FC<IconInterface> = ({
  className,
  ...propsRest
}) => {
  const classNames =  `ThermometerIcon ${className}`;
  return (
    <Icon alt="Thermometer" className={classNames} {...propsRest}>
      <path d="M15 13V5A3 3 0 0 0 9 5V13A5 5 0 1 0 15 13M12 4A1 1 0 0 1 13 5V8H11V5A1 1 0 0 1 12 4Z" />

    </Icon>
  );
};
ThermometerIcon.displayName = 'ThermometerIcon';
  