import React, { FC } from 'react';
import { Icon, IconInterface } from "@redesign-system/react/libs";

export const CurrencyRialIcon: FC<IconInterface> = ({
  className,
  ...propsRest
}) => {
  const classNames =  `CurrencyRialIcon ${className}`;
  return (
    <Icon alt="CurrencyRial" className={classNames} {...propsRest}>
      <path d="M11,17H13V19H11V17M14,17H16V19H14V17M9,4H11V15A4,4 0 0,1 7,19H5A3,3 0 0,1 2,16V12H4V16A1,1 0 0,0 5,17H7C8.11,17 9,16.11 9,15V4M12,4H14V13H17V8H19V13C19,14.11 18.11,15 17,15H14C12.89,15 12,14.11 12,13V4M20,10H22V17A3,3 0 0,1 19,20H17V18H19A1,1 0 0,0 20,17V10Z" />

    </Icon>
  );
};
CurrencyRialIcon.displayName = 'CurrencyRialIcon';
  