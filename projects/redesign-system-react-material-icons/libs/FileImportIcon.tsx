import React, { FC } from 'react';
import { Icon, IconInterface } from "@redesign-system/react/libs";

export const FileImportIcon: FC<IconInterface> = ({
  className,
  ...propsRest
}) => {
  const classNames =  `FileImportIcon ${className}`;
  return (
    <Icon alt="FileImport" className={classNames} {...propsRest}>
      <path d="M6,2C4.89,2 4,2.9 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M13,3.5L18.5,9H13M10.05,11.22L12.88,14.05L15,11.93V19H7.93L10.05,16.88L7.22,14.05" />

    </Icon>
  );
};
FileImportIcon.displayName = 'FileImportIcon';
  