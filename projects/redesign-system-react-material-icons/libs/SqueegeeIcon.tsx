import React, { FC } from 'react';
import { Icon, IconInterface } from "@redesign-system/react/libs";

export const SqueegeeIcon: FC<IconInterface> = ({
  className,
  ...propsRest
}) => {
  const classNames =  `SqueegeeIcon ${className}`;
  return (
    <Icon alt="Squeegee" className={classNames} {...propsRest}>
      <path d="M22,2V5H2V2H22M2,8H7L9,10H10V20A2,2 0 0,0 12,22A2,2 0 0,0 14,20V10H15L17,8H22V6H2V8Z" />

    </Icon>
  );
};
SqueegeeIcon.displayName = 'SqueegeeIcon';
  