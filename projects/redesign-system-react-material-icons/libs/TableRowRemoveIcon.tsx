import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/react";
    export const TableRowRemoveIcon: FC<IconInterface> = function TableRowRemoveIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `TableRowRemoveIcon ${className}`;
      return (
        <Icon alt="TableRowRemove" className={classNames} {...propsRest}>
          <path d="M9.41,13L12,15.59L14.59,13L16,14.41L13.41,17L16,19.59L14.59,21L12,18.41L9.41,21L8,19.59L10.59,17L8,14.41L9.41,13M22,9A2,2 0 0,1 20,11H4A2,2 0 0,1 2,9V6A2,2 0 0,1 4,4H20A2,2 0 0,1 22,6V9M4,9H8V6H4V9M10,9H14V6H10V9M16,9H20V6H16V9Z" />

        </Icon>
      );
    };
    TableRowRemoveIcon.displayName = 'TableRowRemoveIcon';
      