import React, { FC } from 'react';
import { Icon, IconInterface } from "@redesign-system/react/libs";

export const VectorSquareIcon: FC<IconInterface> = ({
  className,
  ...propsRest
}) => {
  const classNames =  `VectorSquareIcon ${className}`;
  return (
    <Icon alt="VectorSquare" className={classNames} {...propsRest}>
      <path d="M2,2H8V4H16V2H22V8H20V16H22V22H16V20H8V22H2V16H4V8H2V2M16,8V6H8V8H6V16H8V18H16V16H18V8H16M4,4V6H6V4H4M18,4V6H20V4H18M4,18V20H6V18H4M18,18V20H20V18H18Z" />

    </Icon>
  );
};
VectorSquareIcon.displayName = 'VectorSquareIcon';
  