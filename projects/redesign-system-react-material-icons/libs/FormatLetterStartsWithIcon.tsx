import React, { FC } from 'react';
import { Icon, IconInterface } from "@redesign-system/react/libs";

export const FormatLetterStartsWithIcon: FC<IconInterface> = ({
  className,
  ...propsRest
}) => {
  const classNames =  `FormatLetterStartsWithIcon ${className}`;
  return (
    <Icon alt="FormatLetterStartsWith" className={classNames} {...propsRest}>
      <path d="M11.14 4L6.43 16H8.36L9.32 13.43H14.67L15.64 16H17.57L12.86 4M12 6.29L14.03 11.71H9.96M4 18V15H2V20H22V18Z" />

    </Icon>
  );
};
FormatLetterStartsWithIcon.displayName = 'FormatLetterStartsWithIcon';
  