import React, { FC } from 'react';
import { Icon, IconInterface } from "@redesign-system/react/libs";

export const MusicRestEighthIcon: FC<IconInterface> = ({
  className,
  ...propsRest
}) => {
  const classNames =  `MusicRestEighthIcon ${className}`;
  return (
    <Icon alt="MusicRestEighth" className={classNames} {...propsRest}>
      <path d="M14 6A5.56 5.56 0 0 1 10.95 7.86A1.5 1.5 0 1 0 9.5 9H9.74A6.32 6.32 0 0 0 13.25 7.93L10 18H12L16 6Z" />

    </Icon>
  );
};
MusicRestEighthIcon.displayName = 'MusicRestEighthIcon';
  