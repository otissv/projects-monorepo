import React, { FC } from 'react';
import { Icon, IconInterface } from "@redesign-system/react/libs";

export const CogTransferIcon: FC<IconInterface> = ({
  className,
  ...propsRest
}) => {
  const classNames =  `CogTransferIcon ${className}`;
  return (
    <Icon alt="CogTransfer" className={classNames} {...propsRest}>
      <path d="M14 18V16L10 19.5L14 23V21H17V18H14M22 15.5L18 12V14H15V17H18V19L22 15.5M21.66 8.73L19.66 5.27C19.54 5.05 19.28 4.96 19.05 5.05L16.56 6.05C16.05 5.64 15.5 5.31 14.87 5.05L14.5 2.42C14.46 2.18 14.25 2 14 2H10C9.75 2 9.54 2.18 9.5 2.42L9.13 5.07C8.5 5.33 7.96 5.66 7.44 6.07L5 5.05C4.77 4.96 4.5 5.05 4.39 5.27L2.39 8.73C2.26 8.94 2.31 9.22 2.5 9.37L4.57 11C4.53 11.33 4.5 11.67 4.5 12C4.5 12.33 4.53 12.67 4.57 13L2.46 14.63C2.26 14.78 2.21 15.06 2.34 15.27L4.34 18.73C4.45 19 4.74 19.11 5 19L5 19L7.5 18C7.74 18.19 8 18.37 8.26 18.53L11.77 15.53C9.84 15.4 8.38 13.73 8.5 11.8C8.65 9.87 10.32 8.41 12.25 8.55C13.69 8.64 14.92 9.62 15.35 11H19.43L21.54 9.37C21.73 9.22 21.78 8.94 21.66 8.73Z" />

    </Icon>
  );
};
CogTransferIcon.displayName = 'CogTransferIcon';
  