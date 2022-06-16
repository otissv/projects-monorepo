import React, { FC } from 'react';
import { Icon, IconInterface } from "@redesign-system/react/libs";

export const SilverwareForkIcon: FC<IconInterface> = ({
  className,
  ...propsRest
}) => {
  const classNames =  `SilverwareForkIcon ${className}`;
  return (
    <Icon alt="SilverwareFork" className={classNames} {...propsRest}>
      <path d="M5.12,21.29L3.71,19.88L13.36,10.22L13.16,10C12.38,9.23 12.38,7.97 13.16,7.19L17.5,2.82L18.43,3.74L15.19,7L16.15,7.94L19.39,4.69L20.31,5.61L17.06,8.85L18,9.81L21.26,6.56L22.18,7.5L17.81,11.84C17.03,12.62 15.77,12.62 15,11.84L14.78,11.64L5.12,21.29Z" />

    </Icon>
  );
};
SilverwareForkIcon.displayName = 'SilverwareForkIcon';
  