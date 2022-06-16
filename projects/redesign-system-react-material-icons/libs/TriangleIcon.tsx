import React, { FC } from 'react';
import { Icon, IconInterface } from "@redesign-system/react/libs";

export const TriangleIcon: FC<IconInterface> = ({
  className,
  ...propsRest
}) => {
  const classNames =  `TriangleIcon ${className}`;
  return (
    <Icon alt="Triangle" className={classNames} {...propsRest}>
      <path d="M1,21H23L12,2" />

    </Icon>
  );
};
TriangleIcon.displayName = 'TriangleIcon';
  