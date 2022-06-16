import React, { FC } from 'react';
import { Icon, IconInterface } from "@redesign-system/react/libs";

export const DetailsIcon: FC<IconInterface> = ({
  className,
  ...propsRest
}) => {
  const classNames =  `DetailsIcon ${className}`;
  return (
    <Icon alt="Details" className={classNames} {...propsRest}>
      <path d="M6.38,6H17.63L12,16L6.38,6M3,4L12,20L21,4H3Z" />

    </Icon>
  );
};
DetailsIcon.displayName = 'DetailsIcon';
  