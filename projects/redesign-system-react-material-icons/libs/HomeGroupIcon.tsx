import React, { FC } from 'react';
import { Icon, IconInterface } from "@redesign-system/react/libs";

export const HomeGroupIcon: FC<IconInterface> = ({
  className,
  ...propsRest
}) => {
  const classNames =  `HomeGroupIcon ${className}`;
  return (
    <Icon alt="HomeGroup" className={classNames} {...propsRest}>
      <path d="M17,16H15V22H12V17H8V22H5V16H3L10,10L17,16M6,2L10,6H9V9H7V6H5V9H3V6H2L6,2M18,3L23,8H22V12H19V9H17V12H15.34L14,10.87V8H13L18,3Z" />

    </Icon>
  );
};
HomeGroupIcon.displayName = 'HomeGroupIcon';
  