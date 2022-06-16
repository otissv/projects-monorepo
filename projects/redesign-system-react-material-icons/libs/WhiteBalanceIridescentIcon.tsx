import React, { FC } from 'react';
import { Icon, IconInterface } from "@redesign-system/react/libs";

export const WhiteBalanceIridescentIcon: FC<IconInterface> = ({
  className,
  ...propsRest
}) => {
  const classNames =  `WhiteBalanceIridescentIcon ${className}`;
  return (
    <Icon alt="WhiteBalanceIridescent" className={classNames} {...propsRest}>
      <path d="M4.96,19.95L6.76,18.15L5.34,16.74L3.55,18.53M3.55,4.46L5.34,6.26L6.76,4.84L4.96,3.05M20.45,18.53L18.66,16.74L17.24,18.15L19.04,19.95M13,22.45V19.5H11V22.45C11.32,22.45 13,22.45 13,22.45M19.04,3.05L17.24,4.84L18.66,6.26L20.45,4.46M11,3.5H13V0.55H11M5,14.5H19V8.5H5V14.5Z" />

    </Icon>
  );
};
WhiteBalanceIridescentIcon.displayName = 'WhiteBalanceIridescentIcon';
  