import React, { FC } from 'react';
import { Icon, IconInterface } from "@redesign-system/react/libs";

export const ShieldKeyIcon: FC<IconInterface> = ({
  className,
  ...propsRest
}) => {
  const classNames =  `ShieldKeyIcon ${className}`;
  return (
    <Icon alt="ShieldKey" className={classNames} {...propsRest}>
      <path d="M12,8A1,1 0 0,1 13,9A1,1 0 0,1 12,10A1,1 0 0,1 11,9A1,1 0 0,1 12,8M21,11C21,16.55 17.16,21.74 12,23C6.84,21.74 3,16.55 3,11V5L12,1L21,5V11M12,6A3,3 0 0,0 9,9C9,10.31 9.83,11.42 11,11.83V18H13V16H15V14H13V11.83C14.17,11.42 15,10.31 15,9A3,3 0 0,0 12,6Z" />

    </Icon>
  );
};
ShieldKeyIcon.displayName = 'ShieldKeyIcon';
  