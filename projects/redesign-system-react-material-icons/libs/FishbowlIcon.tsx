import React, { FC } from 'react';
import { Icon, IconInterface } from "@redesign-system/react/libs";

export const FishbowlIcon: FC<IconInterface> = ({
  className,
  ...propsRest
}) => {
  const classNames =  `FishbowlIcon ${className}`;
  return (
    <Icon alt="Fishbowl" className={classNames} {...propsRest}>
      <path d="M19.11,5H21V3H3V5H4.89C3.11,6.8 2,9.27 2,12C2,15.97 4.31,19.39 7.66,21H16.34C19.69,19.39 22,15.97 22,12C22,9.27 20.89,6.8 19.11,5M13.25,17C12.09,17 11.06,16.64 10.33,16.17C9.67,17 8.33,17 7,17C8.1,17 8.5,15.88 8.5,14.5C8.5,13.12 8.1,12 7,12C8.33,12 9.67,12 10.37,12.91C11.06,12.36 12.09,12 13.25,12C15.32,12 17,13.12 17,14.5C17,15.88 15.32,17 13.25,17M16,7C13.56,8.71 10.44,8.71 8,7C7.06,7.66 6,8.09 4.95,8.25C5.31,7.58 5.77,6.96 6.32,6.41L7.7,5H16.3L17.68,6.41C18.23,6.96 18.69,7.58 19.05,8.25C18,8.09 16.94,7.66 16,7Z" />

    </Icon>
  );
};
FishbowlIcon.displayName = 'FishbowlIcon';
  