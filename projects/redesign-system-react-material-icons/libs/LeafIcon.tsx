import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/react";
    export const LeafIcon: FC<IconInterface> = function LeafIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `LeafIcon ${className}`;
      return (
        <Icon alt="Leaf" className={classNames} {...propsRest}>
          <path d="M17,8C8,10 5.9,16.17 3.82,21.34L5.71,22L6.66,19.7C7.14,19.87 7.64,20 8,20C19,20 22,3 22,3C21,5 14,5.25 9,6.25C4,7.25 2,11.5 2,13.5C2,15.5 3.75,17.25 3.75,17.25C7,8 17,8 17,8Z" />

        </Icon>
      );
    };
    LeafIcon.displayName = 'LeafIcon';
      