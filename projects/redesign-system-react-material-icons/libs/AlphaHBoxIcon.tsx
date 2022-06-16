import React, { FC } from 'react';
import { Icon, IconInterface } from "@redesign-system/react/libs";

export const AlphaHBoxIcon: FC<IconInterface> = ({
  className,
  ...propsRest
}) => {
  const classNames =  `AlphaHBoxIcon ${className}`;
  return (
    <Icon alt="AlphaHBox" className={classNames} {...propsRest}>
      <path d="M9,7V17H11V13H13V17H15V7H13V11H11V7H9M5,3H19A2,2 0 0,1 21,5V19A2,2 0 0,1 19,21H5A2,2 0 0,1 3,19V5A2,2 0 0,1 5,3Z" />

    </Icon>
  );
};
AlphaHBoxIcon.displayName = 'AlphaHBoxIcon';
  