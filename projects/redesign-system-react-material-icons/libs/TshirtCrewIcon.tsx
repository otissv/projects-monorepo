import React, { FC } from 'react';
import { Icon, IconInterface } from "@redesign-system/react/libs";

export const TshirtCrewIcon: FC<IconInterface> = ({
  className,
  ...propsRest
}) => {
  const classNames =  `TshirtCrewIcon ${className}`;
  return (
    <Icon alt="TshirtCrew" className={classNames} {...propsRest}>
      <path d="M16,21H8A1,1 0 0,1 7,20V12.07L5.7,13.07C5.31,13.46 4.68,13.46 4.29,13.07L1.46,10.29C1.07,9.9 1.07,9.27 1.46,8.88L7.34,3H9C9,4.1 10.34,5 12,5C13.66,5 15,4.1 15,3H16.66L22.54,8.88C22.93,9.27 22.93,9.9 22.54,10.29L19.71,13.12C19.32,13.5 18.69,13.5 18.3,13.12L17,12.12V20A1,1 0 0,1 16,21" />

    </Icon>
  );
};
TshirtCrewIcon.displayName = 'TshirtCrewIcon';
  