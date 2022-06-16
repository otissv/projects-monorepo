import React, { FC } from 'react';
import { Icon, IconInterface } from "@redesign-system/react/libs";

export const AlphaKBoxOutlineIcon: FC<IconInterface> = ({
  className,
  ...propsRest
}) => {
  const classNames =  `AlphaKBoxOutlineIcon ${className}`;
  return (
    <Icon alt="AlphaKBoxOutline" className={classNames} {...propsRest}>
      <path d="M9,7H11V10.33L13,7H15L12,12L15,17H13L11,13.67V17H9V7M5,3H19A2,2 0 0,1 21,5V19A2,2 0 0,1 19,21H5A2,2 0 0,1 3,19V5A2,2 0 0,1 5,3M5,5V19H19V5H5Z" />

    </Icon>
  );
};
AlphaKBoxOutlineIcon.displayName = 'AlphaKBoxOutlineIcon';
  