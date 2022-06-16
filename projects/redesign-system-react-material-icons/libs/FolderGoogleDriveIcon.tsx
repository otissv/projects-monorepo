import React, { FC } from 'react';
import { Icon, IconInterface } from "@redesign-system/react/libs";

export const FolderGoogleDriveIcon: FC<IconInterface> = ({
  className,
  ...propsRest
}) => {
  const classNames =  `FolderGoogleDriveIcon ${className}`;
  return (
    <Icon alt="FolderGoogleDrive" className={classNames} {...propsRest}>
      <path d="M13.75,9H16.14L19,14H16.05L13.5,9.46M18.3,17H12.75L14.15,14.5H19.27L19.53,14.96M11.5,17L10.4,14.86L13.24,9.9L14.74,12.56L12.25,17M20,6H12L10,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V8C22,6.89 21.1,6 20,6Z" />

    </Icon>
  );
};
FolderGoogleDriveIcon.displayName = 'FolderGoogleDriveIcon';
  