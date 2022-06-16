import React, { FC } from 'react';
import { Icon, IconInterface } from "@redesign-system/react/libs";

export const AttachmentIcon: FC<IconInterface> = ({
  className,
  ...propsRest
}) => {
  const classNames =  `AttachmentIcon ${className}`;
  return (
    <Icon alt="Attachment" className={classNames} {...propsRest}>
      <path d="M7.5,18A5.5,5.5 0 0,1 2,12.5A5.5,5.5 0 0,1 7.5,7H18A4,4 0 0,1 22,11A4,4 0 0,1 18,15H9.5A2.5,2.5 0 0,1 7,12.5A2.5,2.5 0 0,1 9.5,10H17V11.5H9.5A1,1 0 0,0 8.5,12.5A1,1 0 0,0 9.5,13.5H18A2.5,2.5 0 0,0 20.5,11A2.5,2.5 0 0,0 18,8.5H7.5A4,4 0 0,0 3.5,12.5A4,4 0 0,0 7.5,16.5H17V18H7.5Z" />

    </Icon>
  );
};
AttachmentIcon.displayName = 'AttachmentIcon';
  