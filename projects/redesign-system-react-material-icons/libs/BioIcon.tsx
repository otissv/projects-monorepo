import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/react";
    export const BioIcon: FC<IconInterface> = function BioIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `BioIcon ${className}`;
      return (
        <Icon alt="Bio" className={classNames} {...propsRest}>
          <path d="M17,12H20A2,2 0 0,1 22,14V17A2,2 0 0,1 20,19H17A2,2 0 0,1 15,17V14A2,2 0 0,1 17,12M17,14V17H20V14H17M2,7H7A2,2 0 0,1 9,9V11A2,2 0 0,1 7,13A2,2 0 0,1 9,15V17A2,2 0 0,1 7,19H2V13L2,7M4,9V12H7V9H4M4,17H7V14H4V17M11,13H13V19H11V13M11,9H13V11H11V9Z" />

        </Icon>
      );
    };
    BioIcon.displayName = 'BioIcon';
      