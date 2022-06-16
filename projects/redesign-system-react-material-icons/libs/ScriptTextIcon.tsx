import React, { FC } from 'react';
import { Icon, IconInterface } from "@redesign-system/react/libs";

export const ScriptTextIcon: FC<IconInterface> = ({
  className,
  ...propsRest
}) => {
  const classNames =  `ScriptTextIcon ${className}`;
  return (
    <Icon alt="ScriptText" className={classNames} {...propsRest}>
      <path d="M17.8,20C17.4,21.2 16.3,22 15,22H5C3.3,22 2,20.7 2,19V18H5L14.2,18C14.6,19.2 15.7,20 17,20H17.8M19,2C20.7,2 22,3.3 22,5V6H20V5C20,4.4 19.6,4 19,4C18.4,4 18,4.4 18,5V18H17C16.4,18 16,17.6 16,17V16H5V5C5,3.3 6.3,2 8,2H19M8,6V8H15V6H8M8,10V12H14V10H8Z" />

    </Icon>
  );
};
ScriptTextIcon.displayName = 'ScriptTextIcon';
  