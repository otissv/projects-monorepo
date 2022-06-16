import React, { FC } from 'react';
import { Icon, IconInterface } from "@redesign-system/react/libs";

export const BookPlayIcon: FC<IconInterface> = ({
  className,
  ...propsRest
}) => {
  const classNames =  `BookPlayIcon ${className}`;
  return (
    <Icon alt="BookPlay" className={classNames} {...propsRest}>
      <path d="M6,22A2,2 0 0,1 4,20V4C4,2.89 4.9,2 6,2H7V9L9.5,7.5L12,9V2H18A2,2 0 0,1 20,4V11.5C19.23,11.18 18.39,11 17.5,11A6.5,6.5 0 0,0 11,17.5C11,19.25 11.69,20.83 12.81,22H6M17.5,13C20,13 22,15 22,17.5C22,20 20,22 17.5,22C15,22 13,20 13,17.5C13,15 15,13 17.5,13M16.07,15V20L20,17.5L16.07,15Z" />

    </Icon>
  );
};
BookPlayIcon.displayName = 'BookPlayIcon';
  