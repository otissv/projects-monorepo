import React, { FC } from 'react';
import { Icon, IconInterface } from "@redesign-system/react/libs";

export const CommentRemoveIcon: FC<IconInterface> = ({
  className,
  ...propsRest
}) => {
  const classNames =  `CommentRemoveIcon ${className}`;
  return (
    <Icon alt="CommentRemove" className={classNames} {...propsRest}>
      <path d="M9,22A1,1 0 0,1 8,21V18H4A2,2 0 0,1 2,16V4C2,2.89 2.9,2 4,2H20A2,2 0 0,1 22,4V16A2,2 0 0,1 20,18H13.9L10.2,21.71C10,21.9 9.75,22 9.5,22V22H9M9.41,6L8,7.41L10.59,10L8,12.59L9.41,14L12,11.41L14.59,14L16,12.59L13.41,10L16,7.41L14.59,6L12,8.59L9.41,6Z" />

    </Icon>
  );
};
CommentRemoveIcon.displayName = 'CommentRemoveIcon';
  