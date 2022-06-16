import React, { FC } from 'react';
import { Icon, IconInterface } from "@redesign-system/react/libs";

export const PencilCircleOutlineIcon: FC<IconInterface> = ({
  className,
  ...propsRest
}) => {
  const classNames =  `PencilCircleOutlineIcon ${className}`;
  return (
    <Icon alt="PencilCircleOutline" className={classNames} {...propsRest}>
      <path d="M7,14.94L13.06,8.88L15.12,10.94L9.06,17H7V14.94M12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20M16.7,9.35L15.7,10.35L13.65,8.3L14.65,7.3C14.86,7.08 15.21,7.08 15.42,7.3L16.7,8.58C16.92,8.79 16.92,9.14 16.7,9.35M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2" />

    </Icon>
  );
};
PencilCircleOutlineIcon.displayName = 'PencilCircleOutlineIcon';
  