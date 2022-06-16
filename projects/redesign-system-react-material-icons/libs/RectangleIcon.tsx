import React, { FC } from 'react';
import { Icon, IconInterface } from "@redesign-system/react/libs";

export const RectangleIcon: FC<IconInterface> = ({
  className,
  ...propsRest
}) => {
  const classNames =  `RectangleIcon ${className}`;
  return (
    <Icon alt="Rectangle" className={classNames} {...propsRest}>
      <path d="M4,6V19H20V6H4Z" />

    </Icon>
  );
};
RectangleIcon.displayName = 'RectangleIcon';
  