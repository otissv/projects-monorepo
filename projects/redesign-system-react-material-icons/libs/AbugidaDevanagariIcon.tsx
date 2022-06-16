import React, { FC } from 'react';
import { Icon, IconInterface } from "@redesign-system/react/libs";

export const AbugidaDevanagariIcon: FC<IconInterface> = ({
  className,
  ...propsRest
}) => {
  const classNames =  `AbugidaDevanagariIcon ${className}`;
  return (
    <Icon alt="AbugidaDevanagari" className={classNames} {...propsRest}>
      <path d="M8 3V5H11C12.32 5 13.41 5.83 13.82 7H6V9H14V10H12C9.25 10 7 12.25 7 15C7 17.75 9.25 20 12 20C12.77 20 13.45 19.73 14 19.3V21H16V17H14C13.55 17.62 12.83 18 12 18C10.33 18 9 16.67 9 15C9 13.33 10.33 12 12 12H16V9H18V7H15.9C15.43 4.72 13.41 3 11 3H8Z" />

    </Icon>
  );
};
AbugidaDevanagariIcon.displayName = 'AbugidaDevanagariIcon';
  