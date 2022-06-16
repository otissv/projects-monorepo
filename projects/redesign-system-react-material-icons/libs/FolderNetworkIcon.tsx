import React, { FC } from 'react';
import { Icon, IconInterface } from "@redesign-system/react/libs";

export const FolderNetworkIcon: FC<IconInterface> = ({
  className,
  ...propsRest
}) => {
  const classNames =  `FolderNetworkIcon ${className}`;
  return (
    <Icon alt="FolderNetwork" className={classNames} {...propsRest}>
      <path d="M3,15V5A2,2 0 0,1 5,3H11L13,5H19A2,2 0 0,1 21,7V15A2,2 0 0,1 19,17H13V19H14A1,1 0 0,1 15,20H22V22H15A1,1 0 0,1 14,23H10A1,1 0 0,1 9,22H2V20H9A1,1 0 0,1 10,19H11V17H5A2,2 0 0,1 3,15Z" />

    </Icon>
  );
};
FolderNetworkIcon.displayName = 'FolderNetworkIcon';
  