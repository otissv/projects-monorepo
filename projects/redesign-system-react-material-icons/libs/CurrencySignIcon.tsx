import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/react";
    export const CurrencySignIcon: FC<IconInterface> = function CurrencySignIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `CurrencySignIcon ${className}`;
      return (
        <Icon alt="CurrencySign" className={classNames} {...propsRest}>
          <path d="M22,12C22,9.86 21.29,7.78 20,6.07L22,4.07L19.94,1.94L17.94,3.94C14.4,1.36 9.59,1.38 6.07,4L4.07,2L1.94,4.06L3.94,6.06C1.36,9.6 1.38,14.41 4,17.93L2,19.93L4.12,22.05L6.12,20.05C9.65,22.65 14.45,22.65 18,20.05L20,22.05L22.1,19.93L20.1,17.93C21.35,16.21 22,14.13 22,12M12,19A7,7 0 0,1 5,12A7,7 0 0,1 12,5A7,7 0 0,1 19,12A7,7 0 0,1 12,19Z" />

        </Icon>
      );
    };
    CurrencySignIcon.displayName = 'CurrencySignIcon';
      