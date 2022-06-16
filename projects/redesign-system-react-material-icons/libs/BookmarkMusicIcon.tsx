import React, { FC } from 'react';
import { Icon, IconInterface } from "@redesign-system/react/libs";

export const BookmarkMusicIcon: FC<IconInterface> = ({
  className,
  ...propsRest
}) => {
  const classNames =  `BookmarkMusicIcon ${className}`;
  return (
    <Icon alt="BookmarkMusic" className={classNames} {...propsRest}>
      <path d="M17,3A2,2 0 0,1 19,5V21L12,18L5,21V5C5,3.89 5.9,3 7,3H17M11,11A2,2 0 0,0 9,13A2,2 0 0,0 11,15A2,2 0 0,0 13,13V8H16V6H12V11.27C11.71,11.1 11.36,11 11,11Z" />

    </Icon>
  );
};
BookmarkMusicIcon.displayName = 'BookmarkMusicIcon';
  