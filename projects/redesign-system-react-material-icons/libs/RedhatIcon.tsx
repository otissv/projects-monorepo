import React, { FC } from 'react';
import { Icon, IconInterface } from "@redesign-system/react/libs";

export const RedhatIcon: FC<IconInterface> = ({
  className,
  ...propsRest
}) => {
  const classNames =  `RedhatIcon ${className}`;
  return (
    <Icon alt="Redhat" className={classNames} {...propsRest}>
      <path d="M15.34 13.16C16.66 13.16 18.56 12.89 18.56 11.32C18.57 11.2 18.56 11.08 18.53 10.96L17.75 7.56C17.57 6.81 17.41 6.47 16.09 5.81C15.07 5.29 12.85 4.43 12.19 4.43C11.58 4.43 11.4 5.22 10.67 5.22C9.97 5.22 9.45 4.63 8.79 4.63C8.16 4.63 7.75 5.06 7.43 5.94C7.43 5.94 6.55 8.44 6.43 8.8C6.42 8.87 6.41 8.93 6.41 9C6.41 9.97 10.23 13.15 15.34 13.15M18.77 11.96C18.95 12.82 18.95 12.91 18.95 13C18.95 14.5 17.29 15.31 15.12 15.31C10.2 15.31 5.89 12.43 5.89 10.53C5.89 10.26 5.95 10 6.05 9.76C4.28 9.84 2 10.16 2 12.18C2 15.5 9.84 19.57 16.05 19.57C20.81 19.57 22 17.42 22 15.72C22 14.38 20.85 12.86 18.77 11.96" />

    </Icon>
  );
};
RedhatIcon.displayName = 'RedhatIcon';
  