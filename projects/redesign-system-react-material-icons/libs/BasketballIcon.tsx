import React, { FC } from 'react';
import { Icon, IconInterface } from "@redesign-system/react/libs";

export const BasketballIcon: FC<IconInterface> = ({
  className,
  ...propsRest
}) => {
  const classNames =  `BasketballIcon ${className}`;
  return (
    <Icon alt="Basketball" className={classNames} {...propsRest}>
      <path d="M2.34,14.63C2.94,14.41 3.56,14.3 4.22,14.3C5.56,14.3 6.73,14.72 7.73,15.56L4.59,18.7C3.53,17.5 2.78,16.13 2.34,14.63M15.56,9.8C17.53,11.27 19.66,11.63 21.94,10.88C21.97,11.09 22,11.47 22,12C22,13.03 21.75,14.18 21.28,15.45C20.81,16.71 20.23,17.73 19.55,18.5L13.22,12.19L15.56,9.8M8.77,16.64C9.83,18.17 10.05,19.84 9.42,21.66C8,21.25 6.73,20.61 5.67,19.73L8.77,16.64M12.19,13.22L18.5,19.55C16.33,21.45 13.78,22.25 10.88,21.94C11.09,21.28 11.2,20.56 11.2,19.78C11.2,19.16 11.06,18.43 10.78,17.6C10.5,16.77 10.17,16.09 9.8,15.56L12.19,13.22M8.81,14.5C7.88,13.67 6.8,13.15 5.58,12.91C4.36,12.68 3.19,12.75 2.06,13.13C2.03,12.91 2,12.53 2,12C2,10.97 2.25,9.82 2.72,8.55C3.19,7.29 3.77,6.27 4.45,5.5L11.11,12.19L8.81,14.5M15.56,7.73C14.22,6.08 13.91,4.28 14.63,2.34C15.25,2.5 15.96,2.8 16.76,3.26C17.55,3.71 18.2,4.16 18.7,4.59L15.56,7.73M21.66,9.38C21.06,9.59 20.44,9.7 19.78,9.7C18.69,9.7 17.64,9.38 16.64,8.72L19.73,5.67C20.61,6.77 21.25,8 21.66,9.38M12.19,11.11L5.5,4.45C7.67,2.55 10.22,1.75 13.13,2.06C12.91,2.72 12.8,3.44 12.8,4.22C12.8,4.94 12.96,5.75 13.29,6.66C13.62,7.56 14,8.28 14.5,8.81L12.19,11.11Z" />

    </Icon>
  );
};
BasketballIcon.displayName = 'BasketballIcon';
  