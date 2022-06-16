import React, { FC } from 'react';
import { Icon, IconInterface } from "@redesign-system/react/libs";

export const ArrowCollapseIcon: FC<IconInterface> = ({
  className,
  ...propsRest
}) => {
  const classNames =  `ArrowCollapseIcon ${className}`;
  return (
    <Icon alt="ArrowCollapse" className={classNames} {...propsRest}>
      <path d="M19.5,3.09L15,7.59V4H13V11H20V9H16.41L20.91,4.5L19.5,3.09M4,13V15H7.59L3.09,19.5L4.5,20.91L9,16.41V20H11V13H4Z" />

    </Icon>
  );
};
ArrowCollapseIcon.displayName = 'ArrowCollapseIcon';
  