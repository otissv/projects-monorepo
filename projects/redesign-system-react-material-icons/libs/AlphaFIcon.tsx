import React, { FC } from 'react';
import { Icon, IconInterface } from "@redesign-system/react/libs";

export const AlphaFIcon: FC<IconInterface> = ({
  className,
  ...propsRest
}) => {
  const classNames =  `AlphaFIcon ${className}`;
  return (
    <Icon alt="AlphaF" className={classNames} {...propsRest}>
      <path d="M9,7V17H11V13H14V11H11V9H15V7H9Z" />

    </Icon>
  );
};
AlphaFIcon.displayName = 'AlphaFIcon';
  