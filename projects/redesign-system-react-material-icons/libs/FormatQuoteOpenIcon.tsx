import React, { FC } from 'react';
import { Icon, IconInterface } from "@redesign-system/react/libs";

export const FormatQuoteOpenIcon: FC<IconInterface> = ({
  className,
  ...propsRest
}) => {
  const classNames =  `FormatQuoteOpenIcon ${className}`;
  return (
    <Icon alt="FormatQuoteOpen" className={classNames} {...propsRest}>
      <path d="M10,7L8,11H11V17H5V11L7,7H10M18,7L16,11H19V17H13V11L15,7H18Z" />

    </Icon>
  );
};
FormatQuoteOpenIcon.displayName = 'FormatQuoteOpenIcon';
  