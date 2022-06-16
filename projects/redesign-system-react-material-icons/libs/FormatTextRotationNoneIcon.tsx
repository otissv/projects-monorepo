import React, { FC } from 'react';
import { Icon, IconInterface } from "@redesign-system/react/libs";

export const FormatTextRotationNoneIcon: FC<IconInterface> = ({
  className,
  ...propsRest
}) => {
  const classNames =  `FormatTextRotationNoneIcon ${className}`;
  return (
    <Icon alt="FormatTextRotationNone" className={classNames} {...propsRest}>
      <path d="M20.5,18L17.5,21V19H5V17H17.5V15L20.5,18M10.13,10H13.88L12,4.97L10.13,10M12.75,3L17.5,14H15.42L14.5,11.81H9.5L8.58,14H6.5L11.25,3H12.75Z" />

    </Icon>
  );
};
FormatTextRotationNoneIcon.displayName = 'FormatTextRotationNoneIcon';
  