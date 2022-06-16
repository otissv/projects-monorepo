import React, { FC } from 'react';
import { Icon, IconInterface } from "@redesign-system/react/libs";

export const SealVariantIcon: FC<IconInterface> = ({
  className,
  ...propsRest
}) => {
  const classNames =  `SealVariantIcon ${className}`;
  return (
    <Icon alt="SealVariant" className={classNames} {...propsRest}>
      <path d="M17.71 6.15C17.46 5.38 16.79 5.21 16.45 4.77C16.14 4.31 16.18 3.62 15.53 3.15S14.23 2.92 13.7 2.77 12.81 2 12 2 10.82 2.58 10.3 2.77 9.13 2.67 8.47 3.15 7.86 4.31 7.55 4.77C7.21 5.21 6.55 5.38 6.29 6.15S6.5 7.45 6.5 8 6 9.08 6.29 9.85 7.21 10.79 7.55 11.23C7.86 11.69 7.82 12.38 8.47 12.85S9.77 13.08 10.3 13.23 11.19 14 12 14 13.18 13.42 13.7 13.23 14.87 13.33 15.53 12.85 16.14 11.69 16.45 11.23C16.79 10.79 17.45 10.62 17.71 9.85S17.5 8.55 17.5 8 18 6.92 17.71 6.15M12 12A4 4 0 1 1 16 8A4 4 0 0 1 12 12M14 8A2 2 0 1 1 12 6A2 2 0 0 1 14 8M13.71 15.56L13.08 19.16L12.35 23.29L9.74 20.8L6.44 22.25L7.77 14.75A4 4 0 0 0 9.66 15.17A4.15 4.15 0 0 0 11 15.85A3.32 3.32 0 0 0 12 16A3.5 3.5 0 0 0 13.71 15.56M17.92 18.78L15.34 17.86L15.85 14.92A3.2 3.2 0 0 0 16.7 14.47L16.82 14.37Z" />

    </Icon>
  );
};
SealVariantIcon.displayName = 'SealVariantIcon';
  