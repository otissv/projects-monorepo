import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/react";
    export const CarLimousineIcon: FC<IconInterface> = function CarLimousineIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `CarLimousineIcon ${className}`;
      return (
        <Icon alt="CarLimousine" className={classNames} {...propsRest}>
          <path d="M1,6L2.5,7.5L1,9L2.5,10.5L1,12L2.5,13.5L1,15H15A3,3 0 0,0 18,18A3,3 0 0,0 21,15H23V12C23,10.89 22.11,10 21,10H19L16,6H1M4.62,7.5H10.5V10H4.12L3.12,9L4.62,7.5M12,7.5H15.5L17.46,10H12V7.5M18,13.5A1.5,1.5 0 0,1 19.5,15A1.5,1.5 0 0,1 18,16.5A1.5,1.5 0 0,1 16.5,15A1.5,1.5 0 0,1 18,13.5Z" />

        </Icon>
      );
    };
    CarLimousineIcon.displayName = 'CarLimousineIcon';
      