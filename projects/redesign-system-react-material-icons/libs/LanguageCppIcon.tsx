import React, { FC } from 'react';
import { Icon, IconInterface } from "@redesign-system/react/libs";

export const LanguageCppIcon: FC<IconInterface> = ({
  className,
  ...propsRest
}) => {
  const classNames =  `LanguageCppIcon ${className}`;
  return (
    <Icon alt="LanguageCpp" className={classNames} {...propsRest}>
      <path d="M10.5,15.97L10.91,18.41C10.65,18.55 10.23,18.68 9.67,18.8C9.1,18.93 8.43,19 7.66,19C5.45,18.96 3.79,18.3 2.68,17.04C1.56,15.77 1,14.16 1,12.21C1.05,9.9 1.72,8.13 3,6.89C4.32,5.64 5.96,5 7.94,5C8.69,5 9.34,5.07 9.88,5.19C10.42,5.31 10.82,5.44 11.08,5.59L10.5,8.08L9.44,7.74C9.04,7.64 8.58,7.59 8.05,7.59C6.89,7.58 5.93,7.95 5.18,8.69C4.42,9.42 4.03,10.54 4,12.03C4,13.39 4.37,14.45 5.08,15.23C5.79,16 6.79,16.4 8.07,16.41L9.4,16.29C9.83,16.21 10.19,16.1 10.5,15.97M11,11H13V9H15V11H17V13H15V15H13V13H11V11M18,11H20V9H22V11H24V13H22V15H20V13H18V11Z" />

    </Icon>
  );
};
LanguageCppIcon.displayName = 'LanguageCppIcon';
  