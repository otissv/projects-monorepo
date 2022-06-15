import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/react";
    export const CommentCheckOutlineIcon: FC<IconInterface> = function CommentCheckOutlineIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `CommentCheckOutlineIcon ${className}`;
      return (
        <Icon alt="CommentCheckOutline" className={classNames} {...propsRest}>
          <path d="M9,22A1,1 0 0,1 8,21V18H4A2,2 0 0,1 2,16V4C2,2.89 2.9,2 4,2H20A2,2 0 0,1 22,4V16A2,2 0 0,1 20,18H13.9L10.2,21.71C10,21.9 9.75,22 9.5,22V22H9M10,16V19.08L13.08,16H20V4H4V16H10M16.5,8L11,13.5L7.5,10L8.91,8.59L11,10.67L15.09,6.59L16.5,8Z" />

        </Icon>
      );
    };
    CommentCheckOutlineIcon.displayName = 'CommentCheckOutlineIcon';
      