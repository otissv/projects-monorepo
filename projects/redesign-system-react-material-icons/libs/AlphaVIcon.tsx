import React, { FC } from 'react';
import { Icon, IconInterface } from "@redesign-system/react/libs";

export const AlphaVIcon: FC<IconInterface> = ({
  className,
  ...propsRest
}) => {
  const classNames =  `AlphaVIcon ${className}`;
  return (
    <Icon alt="AlphaV" className={classNames} {...propsRest}>
      <path d="M9,7L11,17H13L15,7H13L12,12L11,7H9Z" />

    </Icon>
  );
};
AlphaVIcon.displayName = 'AlphaVIcon';
  