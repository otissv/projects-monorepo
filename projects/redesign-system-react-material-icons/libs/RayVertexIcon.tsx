import React, { FC } from 'react';
import { Icon, IconInterface } from "@redesign-system/react/libs";

export const RayVertexIcon: FC<IconInterface> = ({
  className,
  ...propsRest
}) => {
  const classNames =  `RayVertexIcon ${className}`;
  return (
    <Icon alt="RayVertex" className={classNames} {...propsRest}>
      <path d="M2,11H9.17C9.58,9.83 10.69,9 12,9C13.31,9 14.42,9.83 14.83,11H22V13H14.83C14.42,14.17 13.31,15 12,15C10.69,15 9.58,14.17 9.17,13H2V11Z" />

    </Icon>
  );
};
RayVertexIcon.displayName = 'RayVertexIcon';
  