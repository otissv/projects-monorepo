import React, { FC } from 'react';
import { Icon, IconInterface } from "@redesign-system/react/libs";

export const PuzzleHeartIcon: FC<IconInterface> = ({
  className,
  ...propsRest
}) => {
  const classNames =  `PuzzleHeartIcon ${className}`;
  return (
    <Icon alt="PuzzleHeart" className={classNames} {...propsRest}>
      <path d="M19 22.3L18.4 21.8C16.4 19.9 15 18.7 15 17.2C15 16 16 15 17.2 15C17.9 15 18.6 15.3 19 15.8C19.4 15.3 20.1 15 20.8 15C22 15 23 15.9 23 17.2C23 18.7 21.6 19.9 19.6 21.8L19 22.3M20.5 11H19V7C19 5.89 18.1 5 17 5H13V3.5C13 2.12 11.88 1 10.5 1S8 2.12 8 3.5V5H4C2.9 5 2 5.9 2 7V10.8H3.5C5 10.8 6.2 12 6.2 13.5S5 16.2 3.5 16.2H2V20C2 21.11 2.9 22 4 22H7.8V20.5C7.8 19 9 17.8 10.5 17.8C11.44 17.8 12.27 18.27 12.75 19H13.09C13.04 18.67 13 18.34 13 18C13 14.69 15.69 12 19 12C20.54 12 21.94 12.58 23 13.53C23 13.5 23 13.5 23 13.5C23 12.12 21.88 11 20.5 11Z" />

    </Icon>
  );
};
PuzzleHeartIcon.displayName = 'PuzzleHeartIcon';
  