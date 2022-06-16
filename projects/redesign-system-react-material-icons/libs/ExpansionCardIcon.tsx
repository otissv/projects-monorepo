import React, { FC } from 'react';
import { Icon, IconInterface } from "@redesign-system/react/libs";

export const ExpansionCardIcon: FC<IconInterface> = ({
  className,
  ...propsRest
}) => {
  const classNames =  `ExpansionCardIcon ${className}`;
  return (
    <Icon alt="ExpansionCard" className={classNames} {...propsRest}>
      <path d="M2,7V8.5H3V17H4.5V7C3.7,7 2.8,7 2,7M6,7V7L6,16H7V17H14V16H22V7H6M17.5,9A2.5,2.5 0 0,1 20,11.5A2.5,2.5 0 0,1 17.5,14A2.5,2.5 0 0,1 15,11.5A2.5,2.5 0 0,1 17.5,9Z" />

    </Icon>
  );
};
ExpansionCardIcon.displayName = 'ExpansionCardIcon';
  