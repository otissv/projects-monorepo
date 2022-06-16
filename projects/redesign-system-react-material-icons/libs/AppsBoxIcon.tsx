import React, { FC } from 'react';
import { Icon, IconInterface } from "@redesign-system/react/libs";

export const AppsBoxIcon: FC<IconInterface> = ({
  className,
  ...propsRest
}) => {
  const classNames =  `AppsBoxIcon ${className}`;
  return (
    <Icon alt="AppsBox" className={classNames} {...propsRest}>
      <path d="M5,3H19A2,2 0 0,1 21,5V19A2,2 0 0,1 19,21H5A2,2 0 0,1 3,19V5A2,2 0 0,1 5,3M7,7V9H9V7H7M11,7V9H13V7H11M15,7V9H17V7H15M7,11V13H9V11H7M11,11V13H13V11H11M15,11V13H17V11H15M7,15V17H9V15H7M11,15V17H13V15H11M15,15V17H17V15H15Z" />

    </Icon>
  );
};
AppsBoxIcon.displayName = 'AppsBoxIcon';
  