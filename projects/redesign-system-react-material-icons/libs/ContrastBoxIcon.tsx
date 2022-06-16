import React, { FC } from 'react';
import { Icon, IconInterface } from "@redesign-system/react/libs";

export const ContrastBoxIcon: FC<IconInterface> = ({
  className,
  ...propsRest
}) => {
  const classNames =  `ContrastBoxIcon ${className}`;
  return (
    <Icon alt="ContrastBox" className={classNames} {...propsRest}>
      <path d="M17,15.5H12V17H17M19,19H5L19,5M5.5,7.5H7.5V5.5H9V7.5H11V9H9V11H7.5V9H5.5M19,3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3Z" />

    </Icon>
  );
};
ContrastBoxIcon.displayName = 'ContrastBoxIcon';
  