import React, { FC } from 'react';
import { Icon, IconInterface } from "@redesign-system/react/libs";

export const FilePresentationBoxIcon: FC<IconInterface> = ({
  className,
  ...propsRest
}) => {
  const classNames =  `FilePresentationBoxIcon ${className}`;
  return (
    <Icon alt="FilePresentationBox" className={classNames} {...propsRest}>
      <path d="M19,16H5V8H19M19,3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3Z" />

    </Icon>
  );
};
FilePresentationBoxIcon.displayName = 'FilePresentationBoxIcon';
  