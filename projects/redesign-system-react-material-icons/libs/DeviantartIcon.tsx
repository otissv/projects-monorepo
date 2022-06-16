import React, { FC } from 'react';
import { Icon, IconInterface } from "@redesign-system/react/libs";

export const DeviantartIcon: FC<IconInterface> = ({
  className,
  ...propsRest
}) => {
  const classNames =  `DeviantartIcon ${className}`;
  return (
    <Icon alt="Deviantart" className={classNames} {...propsRest}>
      <path d="M6,6H12L14,2H18V6L14.5,13H18V18H12L10,22H6V18L9.5,11H6V6Z" />

    </Icon>
  );
};
DeviantartIcon.displayName = 'DeviantartIcon';
  