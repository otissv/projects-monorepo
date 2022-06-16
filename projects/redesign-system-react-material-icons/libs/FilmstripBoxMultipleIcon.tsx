import React, { FC } from 'react';
import { Icon, IconInterface } from "@redesign-system/react/libs";

export const FilmstripBoxMultipleIcon: FC<IconInterface> = ({
  className,
  ...propsRest
}) => {
  const classNames =  `FilmstripBoxMultipleIcon ${className}`;
  return (
    <Icon alt="FilmstripBoxMultiple" className={classNames} {...propsRest}>
      <path d="M4,6H2V20A2,2 0 0,0 4,22H18V20H4V6M20,2H8A2,2 0 0,0 6,4V16A2,2 0 0,0 8,18H20A2,2 0 0,0 22,16V4A2,2 0 0,0 20,2M10,15H8V13H10V15M10,11H8V9H10V11M10,7H8V5H10V7M20,15H18V13H20V15M20,11H18V9H20V11M20,7H18V5H20V7Z" />

    </Icon>
  );
};
FilmstripBoxMultipleIcon.displayName = 'FilmstripBoxMultipleIcon';
  