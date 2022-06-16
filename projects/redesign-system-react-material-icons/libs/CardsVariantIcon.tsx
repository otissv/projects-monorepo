import React, { FC } from 'react';
import { Icon, IconInterface } from "@redesign-system/react/libs";

export const CardsVariantIcon: FC<IconInterface> = ({
  className,
  ...propsRest
}) => {
  const classNames =  `CardsVariantIcon ${className}`;
  return (
    <Icon alt="CardsVariant" className={classNames} {...propsRest}>
      <path d="M5,2H19A1,1 0 0,1 20,3V13A1,1 0 0,1 19,14H5A1,1 0 0,1 4,13V3A1,1 0 0,1 5,2M6,4V12H18V4H6M20,17A1,1 0 0,1 19,18H5A1,1 0 0,1 4,17V16H20V17M20,21A1,1 0 0,1 19,22H5A1,1 0 0,1 4,21V20H20V21Z" />

    </Icon>
  );
};
CardsVariantIcon.displayName = 'CardsVariantIcon';
  