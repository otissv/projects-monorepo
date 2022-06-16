import React, { FC } from 'react';
import { Icon, IconInterface } from "@redesign-system/react/libs";

export const TextureIcon: FC<IconInterface> = ({
  className,
  ...propsRest
}) => {
  const classNames =  `TextureIcon ${className}`;
  return (
    <Icon alt="Texture" className={classNames} {...propsRest}>
      <path d="M9.29,21H12.12L21,12.12V9.29M19,21C19.55,21 20.05,20.78 20.41,20.41C20.78,20.05 21,19.55 21,19V17L17,21M5,3A2,2 0 0,0 3,5V7L7,3M11.88,3L3,11.88V14.71L14.71,3M19.5,3.08L3.08,19.5C3.17,19.85 3.35,20.16 3.59,20.41C3.84,20.65 4.15,20.83 4.5,20.92L20.93,4.5C20.74,3.8 20.2,3.26 19.5,3.08Z" />

    </Icon>
  );
};
TextureIcon.displayName = 'TextureIcon';
  