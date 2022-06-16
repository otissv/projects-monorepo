import React, { FC } from 'react';
import { Icon, IconInterface } from "@redesign-system/react/libs";

export const ShuffleIcon: FC<IconInterface> = ({
  className,
  ...propsRest
}) => {
  const classNames =  `ShuffleIcon ${className}`;
  return (
    <Icon alt="Shuffle" className={classNames} {...propsRest}>
      <path d="M14.83,13.41L13.42,14.82L16.55,17.95L14.5,20H20V14.5L17.96,16.54L14.83,13.41M14.5,4L16.54,6.04L4,18.59L5.41,20L17.96,7.46L20,9.5V4M10.59,9.17L5.41,4L4,5.41L9.17,10.58L10.59,9.17Z" />

    </Icon>
  );
};
ShuffleIcon.displayName = 'ShuffleIcon';
  