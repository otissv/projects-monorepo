import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/react";
    export const DownloadNetworkIcon: FC<IconInterface> = function DownloadNetworkIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `DownloadNetworkIcon ${className}`;
      return (
        <Icon alt="DownloadNetwork" className={classNames} {...propsRest}>
          <path d="M17,3A2,2 0 0,1 19,5V15A2,2 0 0,1 17,17H13V19H14A1,1 0 0,1 15,20H22V22H15A1,1 0 0,1 14,23H10A1,1 0 0,1 9,22H2V20H9A1,1 0 0,1 10,19H11V17H7C5.89,17 5,16.1 5,15V5A2,2 0 0,1 7,3H17M12,14.5L16.5,10H13V6H11V10H7.5L12,14.5Z" />

        </Icon>
      );
    };
    DownloadNetworkIcon.displayName = 'DownloadNetworkIcon';
      