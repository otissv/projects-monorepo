import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/react";
    export const CardBulletedOutlineIcon: FC<IconInterface> = function CardBulletedOutlineIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `CardBulletedOutlineIcon ${className}`;
      return (
        <Icon alt="CardBulletedOutline" className={classNames} {...propsRest}>
          <path d="M12,15H10V13H12V15M18,15H14V13H18V15M8,11H6V9H8V11M18,11H10V9H18V11M20,20H4A2,2 0 0,1 2,18V6A2,2 0 0,1 4,4H20A2,2 0 0,1 22,6V18A2,2 0 0,1 20,20M4,6V18H20V6H4Z" />

        </Icon>
      );
    };
    CardBulletedOutlineIcon.displayName = 'CardBulletedOutlineIcon';
      