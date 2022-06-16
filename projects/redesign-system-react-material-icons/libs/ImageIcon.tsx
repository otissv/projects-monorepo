import React, { FC } from 'react';
import { Icon, IconInterface } from "@redesign-system/react/libs";

export const ImageIcon: FC<IconInterface> = ({
  className,
  ...propsRest
}) => {
  const classNames =  `ImageIcon ${className}`;
  return (
    <Icon alt="Image" className={classNames} {...propsRest}>
      <path d="M8.5,13.5L11,16.5L14.5,12L19,18H5M21,19V5C21,3.89 20.1,3 19,3H5A2,2 0 0,0 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19Z" />

    </Icon>
  );
};
ImageIcon.displayName = 'ImageIcon';
  