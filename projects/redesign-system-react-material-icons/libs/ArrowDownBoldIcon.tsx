import React, { FC } from 'react';
import { Icon, IconInterface } from "@redesign-system/react/libs";

export const ArrowDownBoldIcon: FC<IconInterface> = ({
  className,
  ...propsRest
}) => {
  const classNames =  `ArrowDownBoldIcon ${className}`;
  return (
    <Icon alt="ArrowDownBold" className={classNames} {...propsRest}>
      <path d="M9,4H15V12H19.84L12,19.84L4.16,12H9V4Z" />

    </Icon>
  );
};
ArrowDownBoldIcon.displayName = 'ArrowDownBoldIcon';
  