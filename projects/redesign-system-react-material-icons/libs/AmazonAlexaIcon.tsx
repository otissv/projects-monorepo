import React, { FC } from 'react';
import { Icon, IconInterface } from "@redesign-system/react/libs";

export const AmazonAlexaIcon: FC<IconInterface> = ({
  className,
  ...propsRest
}) => {
  const classNames =  `AmazonAlexaIcon ${className}`;
  return (
    <Icon alt="AmazonAlexa" className={classNames} {...propsRest}>
      <path d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M10.43,21.87V19.91C10.43,19.22 10,18.57 9.35,18.3C6.91,17.26 5.17,14.83 5.17,12C5.17,8.26 8.22,5.17 12,5.17C15.78,5.17 18.83,8.26 18.83,12C18.83,16.43 15.39,20.61 10.43,21.87Z" />

    </Icon>
  );
};
AmazonAlexaIcon.displayName = 'AmazonAlexaIcon';
  