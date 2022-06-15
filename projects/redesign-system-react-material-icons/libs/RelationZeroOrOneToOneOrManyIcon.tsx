import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/react";
    export const RelationZeroOrOneToOneOrManyIcon: FC<IconInterface> = function RelationZeroOrOneToOneOrManyIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `RelationZeroOrOneToOneOrManyIcon ${className}`;
      return (
        <Icon alt="RelationZeroOrOneToOneOrMany" className={classNames} {...propsRest}>
          <path d="M21 13L19 15V13H17V15H13V7H9.79A2.5 2.5 0 0 0 5.21 7H5V5H3V7H2V9H3V11H5V9H5.21A2.5 2.5 0 0 0 9.79 9H11V17H17V19H19V17L21 19H22V13M7.5 9A1 1 0 1 1 8.5 8A1 1 0 0 1 7.5 9Z" />

        </Icon>
      );
    };
    RelationZeroOrOneToOneOrManyIcon.displayName = 'RelationZeroOrOneToOneOrManyIcon';
      