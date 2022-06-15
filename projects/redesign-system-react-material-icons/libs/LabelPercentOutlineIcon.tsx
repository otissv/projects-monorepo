import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/react";
    export const LabelPercentOutlineIcon: FC<IconInterface> = function LabelPercentOutlineIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `LabelPercentOutlineIcon ${className}`;
      return (
        <Icon alt="LabelPercentOutline" className={classNames} {...propsRest}>
          <path d="M16 17H5V7H16L19.55 12M17.63 5.84C17.27 5.33 16.67 5 16 5H5C3.9 5 3 5.9 3 7V17C3 18.11 3.9 19 5 19H16C16.67 19 17.27 18.66 17.63 18.15L22 12L17.63 5.84M13.8 8L15 9.2L8.2 16L7 14.8M8.45 8.03C9.23 8.03 9.87 8.67 9.87 9.45S9.23 10.87 8.45 10.87 7.03 10.23 7.03 9.45 7.67 8.03 8.45 8.03M13.55 13.13C14.33 13.13 14.97 13.77 14.97 14.55C14.97 15.33 14.33 15.97 13.55 15.97C12.77 15.97 12.13 15.33 12.13 14.55C12.13 13.77 12.77 13.13 13.55 13.13Z" />

        </Icon>
      );
    };
    LabelPercentOutlineIcon.displayName = 'LabelPercentOutlineIcon';
      