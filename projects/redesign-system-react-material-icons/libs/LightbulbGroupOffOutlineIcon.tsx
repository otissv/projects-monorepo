import React, { FC } from 'react';
import { Icon, IconInterface } from "@redesign-system/react/libs";

export const LightbulbGroupOffOutlineIcon: FC<IconInterface> = ({
  className,
  ...propsRest
}) => {
  const classNames =  `LightbulbGroupOffOutlineIcon ${className}`;
  return (
    <Icon alt="LightbulbGroupOffOutline" className={classNames} {...propsRest}>
      <path d="M22.11 21.46L2.39 1.73L1.11 3L5.2 7.09C3.25 7.5 1.85 9.27 2 11.31C2.12 12.62 2.86 13.79 4 14.45V16C4 16.55 4.45 17 5 17H7V14.88C5.72 13.58 5 11.83 5 10C5 9.11 5.18 8.23 5.5 7.4L7.12 9C6.74 10.84 7.4 12.8 9 14V16C9 16.55 9.45 17 10 17H14C14.31 17 14.57 16.86 14.75 16.64L17 18.89V19C17 19.34 16.94 19.68 16.83 20H18C18.03 20 18.06 20 18.09 20L20.84 22.73L22.11 21.46M9.23 11.12L10.87 12.76C10.11 12.46 9.53 11.86 9.23 11.12M13 15H11V12.89L13 14.89V15M10.57 7.37L9.13 5.93C10.86 4.72 13.22 4.67 15 6C16.26 6.94 17 8.43 17 10C17 11.05 16.67 12.05 16.08 12.88L14.63 11.43C14.86 11 15 10.5 15 10C15 8.34 13.67 7 12 7C11.5 7 11 7.14 10.57 7.37M17.5 14.31C18.47 13.09 19 11.57 19 10C19 8.96 18.77 7.94 18.32 7C19.63 7.11 20.8 7.85 21.46 9C22.57 10.9 21.91 13.34 20 14.45V16C20 16.22 19.91 16.42 19.79 16.59L17.5 14.31M10 18H14V19C14 19.55 13.55 20 13 20H11C10.45 20 10 19.55 10 19V18M7 19C7 19.34 7.06 19.68 7.17 20H6C5.45 20 5 19.55 5 19V18H7V19Z" />

    </Icon>
  );
};
LightbulbGroupOffOutlineIcon.displayName = 'LightbulbGroupOffOutlineIcon';
  