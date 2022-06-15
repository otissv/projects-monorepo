import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/react";
    export const TranscribeIcon: FC<IconInterface> = function TranscribeIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `TranscribeIcon ${className}`;
      return (
        <Icon alt="Transcribe" className={classNames} {...propsRest}>
          <path d="M20,5A2,2 0 0,1 22,7V17A2,2 0 0,1 20,19H4C2.89,19 2,18.1 2,17V7C2,5.89 2.89,5 4,5H20M18,17V15H12.5L10.5,17H18M6,17H8.5L15.35,10.12C15.55,9.93 15.55,9.61 15.35,9.41L13.59,7.65C13.39,7.45 13.07,7.45 12.88,7.65L6,14.53V17Z" />

        </Icon>
      );
    };
    TranscribeIcon.displayName = 'TranscribeIcon';
      