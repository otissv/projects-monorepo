import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/react";
    export const MuffinIcon: FC<IconInterface> = function MuffinIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `MuffinIcon ${className}`;
      return (
        <Icon alt="Muffin" className={classNames} {...propsRest}>
          <path d="M16,5C16,5 15,2 12,2C9,2 8,5 8,5C6,5 4,7 4,9C1.3,9 1.3,13 4,13H20C22.7,13 22.7,9 20,9C20,7 18,5 16,5M5,15L7,22H9L8,15H5M10,15L11,22H13L14,15H10M16,15L15,22H17L19,15H16Z" />

        </Icon>
      );
    };
    MuffinIcon.displayName = 'MuffinIcon';
      