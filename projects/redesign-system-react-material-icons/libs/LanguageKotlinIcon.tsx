import React, { FC } from 'react';
import { Icon, IconInterface } from "@redesign-system/react/libs";

export const LanguageKotlinIcon: FC<IconInterface> = ({
  className,
  ...propsRest
}) => {
  const classNames =  `LanguageKotlinIcon ${className}`;
  return (
    <Icon alt="LanguageKotlin" className={classNames} {...propsRest}>
      <path d="M2 2H22L12 12L22 22H2Z" />

    </Icon>
  );
};
LanguageKotlinIcon.displayName = 'LanguageKotlinIcon';
  