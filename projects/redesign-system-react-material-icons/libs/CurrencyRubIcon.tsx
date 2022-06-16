import React, { FC } from 'react';
import { Icon, IconInterface } from "@redesign-system/react/libs";

export const CurrencyRubIcon: FC<IconInterface> = ({
  className,
  ...propsRest
}) => {
  const classNames =  `CurrencyRubIcon ${className}`;
  return (
    <Icon alt="CurrencyRub" className={classNames} {...propsRest}>
      <path d="M6,10H7V3H14.5C17,3 19,5 19,7.5C19,10 17,12 14.5,12H9V14H15V16H9V21H7V16H6V14H7V12H6V10M14.5,5H9V10H14.5A2.5,2.5 0 0,0 17,7.5A2.5,2.5 0 0,0 14.5,5Z" />

    </Icon>
  );
};
CurrencyRubIcon.displayName = 'CurrencyRubIcon';
  