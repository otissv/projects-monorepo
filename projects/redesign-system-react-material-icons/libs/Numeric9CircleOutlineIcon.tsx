import React, { FC } from 'react';
import { Icon, IconInterface } from "@redesign-system/react/libs";

export const Numeric9CircleOutlineIcon: FC<IconInterface> = ({
  className,
  ...propsRest
}) => {
  const classNames =  `Numeric9CircleOutlineIcon ${className}`;
  return (
    <Icon alt="Numeric9CircleOutline" className={classNames} {...propsRest}>
      <path d="M13,17H9V15H13V13H11A2,2 0 0,1 9,11V9A2,2 0 0,1 11,7H13A2,2 0 0,1 15,9V15A2,2 0 0,1 13,17M13,11V9H11V11H13M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4Z" />

    </Icon>
  );
};
Numeric9CircleOutlineIcon.displayName = 'Numeric9CircleOutlineIcon';
  