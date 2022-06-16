import React, { FC } from 'react';
import { Icon, IconInterface } from "@redesign-system/react/libs";

export const OrderNumericAscendingIcon: FC<IconInterface> = ({
  className,
  ...propsRest
}) => {
  const classNames =  `OrderNumericAscendingIcon ${className}`;
  return (
    <Icon alt="OrderNumericAscending" className={classNames} {...propsRest}>
      <path d="M7 21H3V19H7V18H5C3.9 18 3 17.11 3 16V15C3 13.9 3.9 13 5 13H7C8.11 13 9 13.9 9 15V19C9 20.11 8.11 21 7 21M7 15H5V16H7M5 3H7C8.11 3 9 3.9 9 5V9C9 10.11 8.11 11 7 11H5C3.9 11 3 10.11 3 9V5C3 3.9 3.9 3 5 3M5 9H7V5H5M12 5H22V7H12M12 19V17H22V19M12 11H22V13H12Z" />

    </Icon>
  );
};
OrderNumericAscendingIcon.displayName = 'OrderNumericAscendingIcon';
  