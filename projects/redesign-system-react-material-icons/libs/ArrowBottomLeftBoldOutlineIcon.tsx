import React, { FC } from 'react';
import { Icon, IconInterface } from "@redesign-system/react/libs";

export const ArrowBottomLeftBoldOutlineIcon: FC<IconInterface> = ({
  className,
  ...propsRest
}) => {
  const classNames =  `ArrowBottomLeftBoldOutlineIcon ${className}`;
  return (
    <Icon alt="ArrowBottomLeftBoldOutline" className={classNames} {...propsRest}>
      <path d="M18.36,19.78H4.22V5.64L8.47,9.88L14.12,4.22L19.78,9.88L14.12,15.54L18.36,19.78M6.34,17.66H13.41L11.29,15.54L16.95,9.88L14.12,7.05L8.46,12.71L6.34,10.59V17.66Z" />

    </Icon>
  );
};
ArrowBottomLeftBoldOutlineIcon.displayName = 'ArrowBottomLeftBoldOutlineIcon';
  