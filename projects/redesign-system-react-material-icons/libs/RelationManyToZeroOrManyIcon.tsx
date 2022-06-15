import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/react";
    export const RelationManyToZeroOrManyIcon: FC<IconInterface> = function RelationManyToZeroOrManyIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `RelationManyToZeroOrManyIcon ${className}`;
      return (
        <Icon alt="RelationManyToZeroOrMany" className={classNames} {...propsRest}>
          <path d="M21 13L19 15H18.79A2.5 2.5 0 0 0 14.21 15H13V7H5L3 5H2V11H3L5 9H11V17H14.21A2.5 2.5 0 0 0 18.79 17H19L21 19H22V13M16.5 17A1 1 0 1 1 17.5 16A1 1 0 0 1 16.5 17Z" />

        </Icon>
      );
    };
    RelationManyToZeroOrManyIcon.displayName = 'RelationManyToZeroOrManyIcon';
      