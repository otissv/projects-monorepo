import React, { FC } from 'react';
import { Icon, IconInterface } from "@redesign-system/react/libs";

export const PdfBoxIcon: FC<IconInterface> = ({
  className,
  ...propsRest
}) => {
  const classNames =  `PdfBoxIcon ${className}`;
  return (
    <Icon alt="PdfBox" className={classNames} {...propsRest}>
      <path d="M12,10.5H13V13.5H12V10.5M7,11.5H8V10.5H7V11.5M20,6V18A2,2 0 0,1 18,20H6A2,2 0 0,1 4,18V6A2,2 0 0,1 6,4H18A2,2 0 0,1 20,6M9.5,10.5A1.5,1.5 0 0,0 8,9H5.5V15H7V13H8A1.5,1.5 0 0,0 9.5,11.5V10.5M14.5,10.5A1.5,1.5 0 0,0 13,9H10.5V15H13A1.5,1.5 0 0,0 14.5,13.5V10.5M18.5,9H15.5V15H17V13H18.5V11.5H17V10.5H18.5V9Z" />

    </Icon>
  );
};
PdfBoxIcon.displayName = 'PdfBoxIcon';
  