import React, { FC } from 'react';
import { Icon, IconInterface } from "@redesign-system/react/libs";

export const MessageReplyIcon: FC<IconInterface> = ({
  className,
  ...propsRest
}) => {
  const classNames =  `MessageReplyIcon ${className}`;
  return (
    <Icon alt="MessageReply" className={classNames} {...propsRest}>
      <path d="M22,4C22,2.89 21.1,2 20,2H4A2,2 0 0,0 2,4V16A2,2 0 0,0 4,18H18L22,22V4Z" />

    </Icon>
  );
};
MessageReplyIcon.displayName = 'MessageReplyIcon';
  