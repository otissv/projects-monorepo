import React, { FC } from 'react';
import { Icon, IconInterface } from "@redesign-system/react/libs";

export const BellAlertIcon: FC<IconInterface> = ({
  className,
  ...propsRest
}) => {
  const classNames =  `BellAlertIcon ${className}`;
  return (
    <Icon alt="BellAlert" className={classNames} {...propsRest}>
      <path d="M23 7V13H21V7M21 15H23V17H21M12 2A2 2 0 0 0 10 4A2 2 0 0 0 10 4.29C7.12 5.14 5 7.82 5 11V17L3 19V20H21V19L19 17V11C19 7.82 16.88 5.14 14 4.29A2 2 0 0 0 14 4A2 2 0 0 0 12 2M10 21A2 2 0 0 0 12 23A2 2 0 0 0 14 21Z" />

    </Icon>
  );
};
BellAlertIcon.displayName = 'BellAlertIcon';
  