import React, { FC } from 'react';
import { Icon, IconInterface } from "@redesign-system/react/libs";

export const ContentSaveIcon: FC<IconInterface> = ({
  className,
  ...propsRest
}) => {
  const classNames =  `ContentSaveIcon ${className}`;
  return (
    <Icon alt="ContentSave" className={classNames} {...propsRest}>
      <path d="M15,9H5V5H15M12,19A3,3 0 0,1 9,16A3,3 0 0,1 12,13A3,3 0 0,1 15,16A3,3 0 0,1 12,19M17,3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V7L17,3Z" />

    </Icon>
  );
};
ContentSaveIcon.displayName = 'ContentSaveIcon';
  