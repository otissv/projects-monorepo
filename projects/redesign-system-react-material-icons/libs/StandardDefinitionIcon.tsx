import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/react";
    export const StandardDefinitionIcon: FC<IconInterface> = function StandardDefinitionIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `StandardDefinitionIcon ${className}`;
      return (
        <Icon alt="StandardDefinition" className={classNames} {...propsRest}>
          <path d="M13,7H16A3,3 0 0,1 19,10V14A3,3 0 0,1 16,17H13V7M16,15A1,1 0 0,0 17,14V10A1,1 0 0,0 16,9H15V15H16M7,7H11V9H7V11H9A2,2 0 0,1 11,13V15A2,2 0 0,1 9,17H5V15H9V13H7A2,2 0 0,1 5,11V9A2,2 0 0,1 7,7Z" />

        </Icon>
      );
    };
    StandardDefinitionIcon.displayName = 'StandardDefinitionIcon';
      