import React, { FC } from 'react';
import { Icon, IconInterface } from "@redesign-system/react/libs";

export const RadioIcon: FC<IconInterface> = ({
  className,
  ...propsRest
}) => {
  const classNames =  `RadioIcon ${className}`;
  return (
    <Icon alt="Radio" className={classNames} {...propsRest}>
      <path d="M20,6A2,2 0 0,1 22,8V20A2,2 0 0,1 20,22H4A2,2 0 0,1 2,20V8C2,7.15 2.53,6.42 3.28,6.13L15.71,1L16.47,2.83L8.83,6H20M20,8H4V12H16V10H18V12H20V8M7,14A3,3 0 0,0 4,17A3,3 0 0,0 7,20A3,3 0 0,0 10,17A3,3 0 0,0 7,14Z" />

    </Icon>
  );
};
RadioIcon.displayName = 'RadioIcon';
  