import React, { FC } from 'react';
import { Icon, IconInterface } from "@redesign-system/react/libs";

export const RollerbladeOffIcon: FC<IconInterface> = ({
  className,
  ...propsRest
}) => {
  const classNames =  `RollerbladeOffIcon ${className}`;
  return (
    <Icon alt="RollerbladeOff" className={classNames} {...propsRest}>
      <path d="M20.84 22.73L19.32 21.21C18.86 21.69 18.22 22 17.5 22C16.12 22 15 20.88 15 19.5C15 18.78 15.31 18.14 15.79 17.68L14.11 16H4V5.89L1.11 3L2.39 1.73L22.11 21.46L20.84 22.73M11.64 7.5L11.43 6H9.24V4.5H11.21L11 3H6.2L10.7 7.5H11.64M19 15C19 10 14 10 14 10H13.2L18.72 15.5C19 15.27 19 15 19 15M11.5 17C10.12 17 9 18.12 9 19.5S10.12 22 11.5 22 14 20.88 14 19.5 12.88 17 11.5 17M5.5 17C4.12 17 3 18.12 3 19.5S4.12 22 5.5 22 8 20.88 8 19.5 6.88 17 5.5 17Z" />

    </Icon>
  );
};
RollerbladeOffIcon.displayName = 'RollerbladeOffIcon';
  