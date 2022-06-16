import React, { FC } from 'react';
import { Icon, IconInterface } from "@redesign-system/react/libs";

export const RecordCircleIcon: FC<IconInterface> = ({
  className,
  ...propsRest
}) => {
  const classNames =  `RecordCircleIcon ${className}`;
  return (
    <Icon alt="RecordCircle" className={classNames} {...propsRest}>
      <path d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,9A3,3 0 0,1 15,12A3,3 0 0,1 12,15A3,3 0 0,1 9,12A3,3 0 0,1 12,9Z" />

    </Icon>
  );
};
RecordCircleIcon.displayName = 'RecordCircleIcon';
  