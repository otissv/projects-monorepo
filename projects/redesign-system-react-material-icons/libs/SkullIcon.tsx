import React, { FC } from 'react';
import { Icon, IconInterface } from "@redesign-system/react/libs";

export const SkullIcon: FC<IconInterface> = ({
  className,
  ...propsRest
}) => {
  const classNames =  `SkullIcon ${className}`;
  return (
    <Icon alt="Skull" className={classNames} {...propsRest}>
      <path d="M12,2A9,9 0 0,0 3,11C3,14.03 4.53,16.82 7,18.47V22H9V19H11V22H13V19H15V22H17V18.46C19.47,16.81 21,14 21,11A9,9 0 0,0 12,2M8,11A2,2 0 0,1 10,13A2,2 0 0,1 8,15A2,2 0 0,1 6,13A2,2 0 0,1 8,11M16,11A2,2 0 0,1 18,13A2,2 0 0,1 16,15A2,2 0 0,1 14,13A2,2 0 0,1 16,11M12,14L13.5,17H10.5L12,14Z" />

    </Icon>
  );
};
SkullIcon.displayName = 'SkullIcon';
  