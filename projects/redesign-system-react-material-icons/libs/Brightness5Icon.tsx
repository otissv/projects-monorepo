import React, { FC } from 'react';
import { Icon, IconInterface } from "@redesign-system/react/libs";

export const Brightness5Icon: FC<IconInterface> = ({
  className,
  ...propsRest
}) => {
  const classNames =  `Brightness5Icon ${className}`;
  return (
    <Icon alt="Brightness5" className={classNames} {...propsRest}>
      <path d="M12,18A6,6 0 0,1 6,12A6,6 0 0,1 12,6A6,6 0 0,1 18,12A6,6 0 0,1 12,18M20,15.31L23.31,12L20,8.69V4H15.31L12,0.69L8.69,4H4V8.69L0.69,12L4,15.31V20H8.69L12,23.31L15.31,20H20V15.31Z" />

    </Icon>
  );
};
Brightness5Icon.displayName = 'Brightness5Icon';
  