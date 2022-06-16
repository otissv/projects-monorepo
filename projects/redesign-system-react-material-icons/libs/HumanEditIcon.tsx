import React, { FC } from 'react';
import { Icon, IconInterface } from "@redesign-system/react/libs";

export const HumanEditIcon: FC<IconInterface> = ({
  className,
  ...propsRest
}) => {
  const classNames =  `HumanEditIcon ${className}`;
  return (
    <Icon alt="HumanEdit" className={classNames} {...propsRest}>
      <path d="M19.07 14.88L21.12 16.93L15.06 23H13V20.94L19.07 14.88M21.04 13.13C21.18 13.13 21.31 13.19 21.42 13.3L22.7 14.58C22.92 14.79 22.92 15.14 22.7 15.35L21.7 16.35L19.65 14.3L20.65 13.3C20.76 13.19 20.9 13.13 21.04 13.13M21 9H15V16L13 18V16H11V22H9V9H3V7H21V9M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2Z" />

    </Icon>
  );
};
HumanEditIcon.displayName = 'HumanEditIcon';
  