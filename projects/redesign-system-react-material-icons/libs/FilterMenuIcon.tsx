import React, { FC } from 'react';
import { Icon, IconInterface } from "@redesign-system/react/libs";

export const FilterMenuIcon: FC<IconInterface> = ({
  className,
  ...propsRest
}) => {
  const classNames =  `FilterMenuIcon ${className}`;
  return (
    <Icon alt="FilterMenu" className={classNames} {...propsRest}>
      <path d="M11 11L16.76 3.62A1 1 0 0 0 16.59 2.22A1 1 0 0 0 16 2H2A1 1 0 0 0 1.38 2.22A1 1 0 0 0 1.21 3.62L7 11V16.87A1 1 0 0 0 7.29 17.7L9.29 19.7A1 1 0 0 0 10.7 19.7A1 1 0 0 0 11 18.87V11M13 16L18 21L23 16Z" />

    </Icon>
  );
};
FilterMenuIcon.displayName = 'FilterMenuIcon';
  