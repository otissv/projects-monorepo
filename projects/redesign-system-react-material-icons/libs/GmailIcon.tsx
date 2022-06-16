import React, { FC } from 'react';
import { Icon, IconInterface } from "@redesign-system/react/libs";

export const GmailIcon: FC<IconInterface> = ({
  className,
  ...propsRest
}) => {
  const classNames =  `GmailIcon ${className}`;
  return (
    <Icon alt="Gmail" className={classNames} {...propsRest}>
      <path d="M20,18H18V9.25L12,13L6,9.25V18H4V6H5.2L12,10.25L18.8,6H20M20,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V6C22,4.89 21.1,4 20,4Z" />

    </Icon>
  );
};
GmailIcon.displayName = 'GmailIcon';
  