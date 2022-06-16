import React, { FC } from 'react';
import { Icon, IconInterface } from "@redesign-system/react/libs";

export const HeadHeartOutlineIcon: FC<IconInterface> = ({
  className,
  ...propsRest
}) => {
  const classNames =  `HeadHeartOutlineIcon ${className}`;
  return (
    <Icon alt="HeadHeartOutline" className={classNames} {...propsRest}>
      <path d="M13 3C16.88 3 20 6.14 20 10C20 12.8 18.37 15.19 16 16.31V21H9V18H8C6.89 18 6 17.11 6 16V13H4.5C4.08 13 3.84 12.5 4.08 12.19L6 9.66C6.19 5.95 9.23 3 13 3M13 1C8.41 1 4.61 4.42 4.06 8.9L2.5 11L2.47 11L2.45 11.03C1.9 11.79 1.83 12.79 2.26 13.62C2.62 14.31 3.26 14.79 4 14.94V16C4 17.85 5.28 19.42 7 19.87V23H18V17.5C20.5 15.83 22 13.06 22 10C22 5.03 17.96 1 13 1M17 8.83C17 10.37 15.64 11.6 13.58 13.47L13 14L12.42 13.47C10.36 11.6 9 10.37 9 8.83C9 7.63 9.96 6.64 11.16 6.63H11.2C11.89 6.63 12.55 6.94 13 7.46C13.45 6.94 14.11 6.63 14.8 6.63C16 6.62 17 7.59 17 8.79V8.83Z" />

    </Icon>
  );
};
HeadHeartOutlineIcon.displayName = 'HeadHeartOutlineIcon';
  