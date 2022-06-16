import React, { FC } from 'react';
import { Icon, IconInterface } from "@redesign-system/react/libs";

export const CoffeeToGoOutlineIcon: FC<IconInterface> = ({
  className,
  ...propsRest
}) => {
  const classNames =  `CoffeeToGoOutlineIcon ${className}`;
  return (
    <Icon alt="CoffeeToGoOutline" className={classNames} {...propsRest}>
      <path d="M3 3V11A4 4 0 0 0 7 15H11A4 4 0 0 0 15 11V10H17C18.11 10 19 9.11 19 8V5C19 3.9 18.11 3 17 3H3M5 5H13V11A2 2 0 0 1 11 13H7A2 2 0 0 1 5 11V5M15 5H17V8H15V5M16.67 13.83L15.26 15.24L17 17H3V19H17L15.26 20.76L16.67 22.17L20.84 18L16.67 13.83Z" />

    </Icon>
  );
};
CoffeeToGoOutlineIcon.displayName = 'CoffeeToGoOutlineIcon';
  