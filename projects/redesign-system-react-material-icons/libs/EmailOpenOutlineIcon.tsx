import React, { FC } from 'react';
import { Icon, IconInterface } from "@redesign-system/react/libs";

export const EmailOpenOutlineIcon: FC<IconInterface> = ({
  className,
  ...propsRest
}) => {
  const classNames =  `EmailOpenOutlineIcon ${className}`;
  return (
    <Icon alt="EmailOpenOutline" className={classNames} {...propsRest}>
      <path d="M21.03 6.29L12 .64L2.97 6.29C2.39 6.64 2 7.27 2 8V18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V8C22 7.27 21.61 6.64 21.03 6.29M20 18H4V10L12 15L20 10V18M12 13L4 8L12 3L20 8L12 13Z" />

    </Icon>
  );
};
EmailOpenOutlineIcon.displayName = 'EmailOpenOutlineIcon';
  