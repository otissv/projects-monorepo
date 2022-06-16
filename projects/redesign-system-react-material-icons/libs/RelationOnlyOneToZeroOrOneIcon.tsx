import React, { FC } from 'react';
import { Icon, IconInterface } from "@redesign-system/react/libs";

export const RelationOnlyOneToZeroOrOneIcon: FC<IconInterface> = ({
  className,
  ...propsRest
}) => {
  const classNames =  `RelationOnlyOneToZeroOrOneIcon ${className}`;
  return (
    <Icon alt="RelationOnlyOneToZeroOrOne" className={classNames} {...propsRest}>
      <path d="M21 15V13H19V15H18.79A2.5 2.5 0 0 0 14.21 15H13V7H8V5H6V7H5V5H3V7H2V9H3V11H5V9H6V11H8V9H11V17H14.21A2.5 2.5 0 0 0 18.79 17H19V19H21V17H22V15M16.5 17A1 1 0 1 1 17.5 16A1 1 0 0 1 16.5 17Z" />

    </Icon>
  );
};
RelationOnlyOneToZeroOrOneIcon.displayName = 'RelationOnlyOneToZeroOrOneIcon';
  