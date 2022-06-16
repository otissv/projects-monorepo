import React, { FC } from 'react';
import { Icon, IconInterface } from "@redesign-system/react/libs";

export const ViewAgendaOutlineIcon: FC<IconInterface> = ({
  className,
  ...propsRest
}) => {
  const classNames =  `ViewAgendaOutlineIcon ${className}`;
  return (
    <Icon alt="ViewAgendaOutline" className={classNames} {...propsRest}>
      <path d="M21 13H3A1 1 0 0 0 2 14V20A1 1 0 0 0 3 21H21A1 1 0 0 0 22 20V14A1 1 0 0 0 21 13M20 19H4V15H20M21 3H3A1 1 0 0 0 2 4V10A1 1 0 0 0 3 11H21A1 1 0 0 0 22 10V4A1 1 0 0 0 21 3M20 9H4V5H20Z" />

    </Icon>
  );
};
ViewAgendaOutlineIcon.displayName = 'ViewAgendaOutlineIcon';
  