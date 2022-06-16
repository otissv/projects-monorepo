import React, { FC } from 'react';
import { Icon, IconInterface } from "@redesign-system/react/libs";

export const UploadMultipleIcon: FC<IconInterface> = ({
  className,
  ...propsRest
}) => {
  const classNames =  `UploadMultipleIcon ${className}`;
  return (
    <Icon alt="UploadMultiple" className={classNames} {...propsRest}>
      <path d="M9,14V8H5L12,1L19,8H15V14H9M5,18V16H19V18H5M19,20H5V22H19V20Z" />

    </Icon>
  );
};
UploadMultipleIcon.displayName = 'UploadMultipleIcon';
  