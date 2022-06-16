import React, { FC } from 'react';
import { Icon, IconInterface } from "@redesign-system/react/libs";

export const EmoticonNeutralIcon: FC<IconInterface> = ({
  className,
  ...propsRest
}) => {
  const classNames =  `EmoticonNeutralIcon ${className}`;
  return (
    <Icon alt="EmoticonNeutral" className={classNames} {...propsRest}>
      <path d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M7,9.5A1.5,1.5 0 0,1 8.5,8A1.5,1.5 0 0,1 10,9.5A1.5,1.5 0 0,1 8.5,11A1.5,1.5 0 0,1 7,9.5M16,16H8V14H16V16M15.5,11A1.5,1.5 0 0,1 14,9.5A1.5,1.5 0 0,1 15.5,8A1.5,1.5 0 0,1 17,9.5A1.5,1.5 0 0,1 15.5,11Z" />

    </Icon>
  );
};
EmoticonNeutralIcon.displayName = 'EmoticonNeutralIcon';
  