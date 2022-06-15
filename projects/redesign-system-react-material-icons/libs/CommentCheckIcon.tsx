import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/react";
    export const CommentCheckIcon: FC<IconInterface> = function CommentCheckIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `CommentCheckIcon ${className}`;
      return (
        <Icon alt="CommentCheck" className={classNames} {...propsRest}>
          <path d="M9,22A1,1 0 0,1 8,21V18H4A2,2 0 0,1 2,16V4C2,2.89 2.9,2 4,2H20A2,2 0 0,1 22,4V16A2,2 0 0,1 20,18H13.9L10.2,21.71C10,21.9 9.75,22 9.5,22V22H9M10,15L18,7L16.59,5.58L10,12.17L7.41,9.59L6,11L10,15Z" />

        </Icon>
      );
    };
    CommentCheckIcon.displayName = 'CommentCheckIcon';
      