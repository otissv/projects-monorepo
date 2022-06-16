import React, { FC } from 'react';
import { Icon, IconInterface } from "@redesign-system/react/libs";

export const PenguinIcon: FC<IconInterface> = ({
  className,
  ...propsRest
}) => {
  const classNames =  `PenguinIcon ${className}`;
  return (
    <Icon alt="Penguin" className={classNames} {...propsRest}>
      <path d="M19,16C19,17.72 18.37,19.3 17.34,20.5C17.75,20.89 18,21.41 18,22H6C6,21.41 6.25,20.89 6.66,20.5C5.63,19.3 5,17.72 5,16H3C3,14.75 3.57,13.64 4.46,12.91L4.47,12.89C6,11.81 7,10 7,8V7A5,5 0 0,1 12,2A5,5 0 0,1 17,7V8C17,10 18,11.81 19.53,12.89L19.54,12.91C20.43,13.64 21,14.75 21,16H19M16,16A4,4 0 0,0 12,12A4,4 0 0,0 8,16A4,4 0 0,0 12,20A4,4 0 0,0 16,16M10,9L12,10.5L14,9L12,7.5L10,9M10,5A1,1 0 0,0 9,6A1,1 0 0,0 10,7A1,1 0 0,0 11,6A1,1 0 0,0 10,5M14,5A1,1 0 0,0 13,6A1,1 0 0,0 14,7A1,1 0 0,0 15,6A1,1 0 0,0 14,5Z" />

    </Icon>
  );
};
PenguinIcon.displayName = 'PenguinIcon';
  