import React, { FC } from 'react';
import { Icon, IconInterface } from "@redesign-system/react/libs";

export const GolfCartIcon: FC<IconInterface> = ({
  className,
  ...propsRest
}) => {
  const classNames =  `GolfCartIcon ${className}`;
  return (
    <Icon alt="GolfCart" className={classNames} {...propsRest}>
      <path d="M19.89 12.37L18.25 5H19V3H3V7H1V9H3V12.54A6 6 0 0 0 1 17V19H3A3 3 0 0 0 9 19H15A3 3 0 0 0 21 19H23V17A5 5 0 0 0 19.89 12.37M6 20.5A1.5 1.5 0 1 1 7.5 19A1.5 1.5 0 0 1 6 20.5M15.53 12L14.38 10.28L15.8 9.33L14.7 7.67L10.2 10.67L11.3 12.33L12.73 11.38L13.88 13.12L13 14H10.2L5 7V5H16.2L17.75 12M18 20.5A1.5 1.5 0 1 1 19.5 19A1.5 1.5 0 0 1 18 20.5Z" />

    </Icon>
  );
};
GolfCartIcon.displayName = 'GolfCartIcon';
  