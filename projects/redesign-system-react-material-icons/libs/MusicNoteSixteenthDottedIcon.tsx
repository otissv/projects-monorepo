import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/react";
    export const MusicNoteSixteenthDottedIcon: FC<IconInterface> = function MusicNoteSixteenthDottedIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `MusicNoteSixteenthDottedIcon ${className}`;
      return (
        <Icon alt="MusicNoteSixteenthDotted" className={classNames} {...propsRest}>
          <path d="M18 18.5A1.5 1.5 0 1 1 16.5 17A1.5 1.5 0 0 1 18 18.5M18 7V3H12V13.55A4 4 0 1 0 14 17V11H18V8H14V7Z" />

        </Icon>
      );
    };
    MusicNoteSixteenthDottedIcon.displayName = 'MusicNoteSixteenthDottedIcon';
      