import React, { FC } from 'react';
import { Icon, IconInterface } from "@redesign-system/react/libs";

export const FastForwardOutlineIcon: FC<IconInterface> = ({
  className,
  ...propsRest
}) => {
  const classNames =  `FastForwardOutlineIcon ${className}`;
  return (
    <Icon alt="FastForwardOutline" className={classNames} {...propsRest}>
      <path d="M15,9.9L18,12L15,14.1V9.9M6,9.9L9,12L6,14.1V9.9M13,6V18L21.5,12L13,6M4,6V18L12.5,12L4,6Z" />

    </Icon>
  );
};
FastForwardOutlineIcon.displayName = 'FastForwardOutlineIcon';
  