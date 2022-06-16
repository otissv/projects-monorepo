import React, { FC } from 'react';
import { Icon, IconInterface } from "@redesign-system/react/libs";

export const VectorLinkIcon: FC<IconInterface> = ({
  className,
  ...propsRest
}) => {
  const classNames =  `VectorLinkIcon ${className}`;
  return (
    <Icon alt="VectorLink" className={classNames} {...propsRest}>
      <path d="M3 1C1.89 1 1 1.89 1 3V14C1 15.11 1.89 16 3 16H14C15.11 16 16 15.11 16 14V11H14V14H3V3H14V5H16V3C16 1.89 15.11 1 14 1M9 7C7.89 7 7 7.89 7 9V12H9V9H20V20H9V18H7V20C7 21.11 7.89 22 9 22H20C21.11 22 22 21.11 22 20V9C22 7.89 21.11 7 20 7H9" />

    </Icon>
  );
};
VectorLinkIcon.displayName = 'VectorLinkIcon';
  