import React, { FC } from 'react';
import { Icon, IconInterface } from "@redesign-system/react/libs";

export const CoffeeToGoIcon: FC<IconInterface> = ({
  className,
  ...propsRest
}) => {
  const classNames =  `CoffeeToGoIcon ${className}`;
  return (
    <Icon alt="CoffeeToGo" className={classNames} {...propsRest}>
      <path d="M3,19V17H17L15.26,15.24L16.67,13.83L20.84,18L16.67,22.17L15.26,20.76L17,19H3M17,8V5H15V8H17M17,3C18.11,3 19,3.9 19,5V8C19,9.11 18.11,10 17,10H15V11A4,4 0 0,1 11,15H7A4,4 0 0,1 3,11V3H17Z" />

    </Icon>
  );
};
CoffeeToGoIcon.displayName = 'CoffeeToGoIcon';
  