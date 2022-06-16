import React, { FC } from 'react';
import { Icon, IconInterface } from "@redesign-system/react/libs";

export const ContentSaveEditIcon: FC<IconInterface> = ({
  className,
  ...propsRest
}) => {
  const classNames =  `ContentSaveEditIcon ${className}`;
  return (
    <Icon alt="ContentSaveEdit" className={classNames} {...propsRest}>
      <path d="M10,19L10.14,18.86C8.9,18.5 8,17.36 8,16A3,3 0 0,1 11,13C12.36,13 13.5,13.9 13.86,15.14L20,9V7L16,3H4C2.89,3 2,3.9 2,5V19A2,2 0 0,0 4,21H10V19M4,5H14V9H4V5M20.04,12.13C19.9,12.13 19.76,12.19 19.65,12.3L18.65,13.3L20.7,15.35L21.7,14.35C21.92,14.14 21.92,13.79 21.7,13.58L20.42,12.3C20.31,12.19 20.18,12.13 20.04,12.13M18.07,13.88L12,19.94V22H14.06L20.12,15.93L18.07,13.88Z" />

    </Icon>
  );
};
ContentSaveEditIcon.displayName = 'ContentSaveEditIcon';
  