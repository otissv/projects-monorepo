import React, { FC } from 'react';
import { Icon, IconInterface } from "@redesign-system/react/libs";

export const SpeakerMultipleIcon: FC<IconInterface> = ({
  className,
  ...propsRest
}) => {
  const classNames =  `SpeakerMultipleIcon ${className}`;
  return (
    <Icon alt="SpeakerMultiple" className={classNames} {...propsRest}>
      <path d="M14,10A3,3 0 0,0 11,13A3,3 0 0,0 14,16A3,3 0 0,0 17,13A3,3 0 0,0 14,10M14,18A5,5 0 0,1 9,13A5,5 0 0,1 14,8A5,5 0 0,1 19,13A5,5 0 0,1 14,18M14,2A2,2 0 0,1 16,4A2,2 0 0,1 14,6A2,2 0 0,1 12,4A2,2 0 0,1 14,2M19,0H9A2,2 0 0,0 7,2V18A2,2 0 0,0 9,20H19A2,2 0 0,0 21,18V2A2,2 0 0,0 19,0M5,22H17V24H5A2,2 0 0,1 3,22V4H5" />

    </Icon>
  );
};
SpeakerMultipleIcon.displayName = 'SpeakerMultipleIcon';
  