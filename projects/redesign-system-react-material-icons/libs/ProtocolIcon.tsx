import React, { FC } from 'react';
import { Icon, IconInterface } from "@redesign-system/react/libs";

export const ProtocolIcon: FC<IconInterface> = ({
  className,
  ...propsRest
}) => {
  const classNames =  `ProtocolIcon ${className}`;
  return (
    <Icon alt="Protocol" className={classNames} {...propsRest}>
      <path d="M18 20H14L18 4H22M16 4H12L8 20H12M2 16.5A2.5 2.5 0 0 0 4.5 19A2.5 2.5 0 0 0 7 16.5A2.5 2.5 0 0 0 4.5 14A2.5 2.5 0 0 0 2 16.5M2 9.5A2.5 2.5 0 0 0 4.5 12A2.5 2.5 0 0 0 7 9.5A2.5 2.5 0 0 0 4.5 7A2.5 2.5 0 0 0 2 9.5Z" />

    </Icon>
  );
};
ProtocolIcon.displayName = 'ProtocolIcon';
  