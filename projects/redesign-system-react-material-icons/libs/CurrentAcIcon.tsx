import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/react";
    export const CurrentAcIcon: FC<IconInterface> = function CurrentAcIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `CurrentAcIcon ${className}`;
      return (
        <Icon alt="CurrentAc" className={classNames} {...propsRest}>
          <path d="M12.43 11C12.28 10.84 10 7 7 7S2.32 10.18 2 11V13H11.57C11.72 13.16 14 17 17 17S21.68 13.82 22 13V11H12.43M7 9C8.17 9 9.18 9.85 10 11H4.31C4.78 10.17 5.54 9 7 9M17 15C15.83 15 14.82 14.15 14 13H19.69C19.22 13.83 18.46 15 17 15Z" />

        </Icon>
      );
    };
    CurrentAcIcon.displayName = 'CurrentAcIcon';
      