import React, { FC } from 'react';
import { Icon, IconInterface } from "@redesign-system/react/libs";

export const BookPlusIcon: FC<IconInterface> = ({
  className,
  ...propsRest
}) => {
  const classNames =  `BookPlusIcon ${className}`;
  return (
    <Icon alt="BookPlus" className={classNames} {...propsRest}>
      <path d="M18,22H6A2,2 0 0,1 4,20V4C4,2.89 4.9,2 6,2H7V9L9.5,7.5L12,9V2H18A2,2 0 0,1 20,4V20A2,2 0 0,1 18,22M14,20H16V18H18V16H16V14H14V16H12V18H14V20Z" />

    </Icon>
  );
};
BookPlusIcon.displayName = 'BookPlusIcon';
  