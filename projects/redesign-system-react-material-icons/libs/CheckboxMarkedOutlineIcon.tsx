import React, { FC } from 'react';
import { Icon, IconInterface } from "@redesign-system/react/libs";

export const CheckboxMarkedOutlineIcon: FC<IconInterface> = ({
  className,
  ...propsRest
}) => {
  const classNames =  `CheckboxMarkedOutlineIcon ${className}`;
  return (
    <Icon alt="CheckboxMarkedOutline" className={classNames} {...propsRest}>
      <path d="M19,19H5V5H15V3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V11H19M7.91,10.08L6.5,11.5L11,16L21,6L19.59,4.58L11,13.17L7.91,10.08Z" />

    </Icon>
  );
};
CheckboxMarkedOutlineIcon.displayName = 'CheckboxMarkedOutlineIcon';
  