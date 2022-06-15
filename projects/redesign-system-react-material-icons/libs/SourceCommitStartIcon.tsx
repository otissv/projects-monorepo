import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/react";
    export const SourceCommitStartIcon: FC<IconInterface> = function SourceCommitStartIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `SourceCommitStartIcon ${className}`;
      return (
        <Icon alt="SourceCommitStart" className={classNames} {...propsRest}>
          <path d="M12,7A5,5 0 0,1 17,12C17,14.42 15.28,16.44 13,16.9V21H11V16.9C8.72,16.44 7,14.42 7,12A5,5 0 0,1 12,7M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9Z" />

        </Icon>
      );
    };
    SourceCommitStartIcon.displayName = 'SourceCommitStartIcon';
      