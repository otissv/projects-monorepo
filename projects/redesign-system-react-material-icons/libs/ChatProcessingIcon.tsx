import React, { FC } from 'react';
import { Icon, IconInterface } from "@redesign-system/react/libs";

export const ChatProcessingIcon: FC<IconInterface> = ({
  className,
  ...propsRest
}) => {
  const classNames =  `ChatProcessingIcon ${className}`;
  return (
    <Icon alt="ChatProcessing" className={classNames} {...propsRest}>
      <path d="M12,3C17.5,3 22,6.58 22,11C22,15.42 17.5,19 12,19C10.76,19 9.57,18.82 8.47,18.5C5.55,21 2,21 2,21C4.33,18.67 4.7,17.1 4.75,16.5C3.05,15.07 2,13.13 2,11C2,6.58 6.5,3 12,3M17,12V10H15V12H17M13,12V10H11V12H13M9,12V10H7V12H9Z" />

    </Icon>
  );
};
ChatProcessingIcon.displayName = 'ChatProcessingIcon';
  