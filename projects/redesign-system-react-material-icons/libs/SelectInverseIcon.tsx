import React, { FC } from 'react';
import { Icon, IconInterface } from "@redesign-system/react/libs";

export const SelectInverseIcon: FC<IconInterface> = ({
  className,
  ...propsRest
}) => {
  const classNames =  `SelectInverseIcon ${className}`;
  return (
    <Icon alt="SelectInverse" className={classNames} {...propsRest}>
      <path d="M5,3H7V5H9V3H11V5H13V3H15V5H17V3H19V5H21V7H19V9H21V11H19V13H21V15H19V17H21V19H19V21H17V19H15V21H13V19H11V21H9V19H7V21H5V19H3V17H5V15H3V13H5V11H3V9H5V7H3V5H5V3Z" />

    </Icon>
  );
};
SelectInverseIcon.displayName = 'SelectInverseIcon';
  