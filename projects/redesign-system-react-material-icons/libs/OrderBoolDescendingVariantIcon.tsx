import React, { FC } from 'react';
import { Icon, IconInterface } from "@redesign-system/react/libs";

export const OrderBoolDescendingVariantIcon: FC<IconInterface> = ({
  className,
  ...propsRest
}) => {
  const classNames =  `OrderBoolDescendingVariantIcon ${className}`;
  return (
    <Icon alt="OrderBoolDescendingVariant" className={classNames} {...propsRest}>
      <path d="M4 3C2.89 3 2 3.89 2 5V9C2 10.11 2.89 11 4 11H8C9.11 11 10 10.11 10 9V5C10 3.89 9.11 3 8 3M8.2 4.5L9.26 5.55L5.27 9.5L2.74 6.95L3.81 5.9L5.28 7.39M4 13C2.89 13 2 13.89 2 15V19C2 20.11 2.89 21 4 21H8C9.11 21 10 20.11 10 19V15C10 13.89 9.11 13 8 13M4 15H8V19H4M12 5H22V7H12M12 19V17H22V19M12 11H22V13H12Z" />

    </Icon>
  );
};
OrderBoolDescendingVariantIcon.displayName = 'OrderBoolDescendingVariantIcon';
  