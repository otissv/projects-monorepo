import React, { FC } from 'react';
import { Icon, IconInterface } from "@redesign-system/react/libs";

export const HomeRemoveIcon: FC<IconInterface> = ({
  className,
  ...propsRest
}) => {
  const classNames =  `HomeRemoveIcon ${className}`;
  return (
    <Icon alt="HomeRemove" className={classNames} {...propsRest}>
      <path d="M12 3L2 12H5V20H19V12H22L12 3M15.54 16.12L14.12 17.54L12 15.41L9.88 17.54L8.47 16.12L10.59 14L8.47 11.88L9.88 10.47L12 12.59L14.12 10.47L15.54 11.88L13.41 14L15.54 16.12Z" />

    </Icon>
  );
};
HomeRemoveIcon.displayName = 'HomeRemoveIcon';
  