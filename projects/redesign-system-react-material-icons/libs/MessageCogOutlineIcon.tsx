import React, { FC } from 'react';
import { Icon, IconInterface } from "@redesign-system/react/libs";

export const MessageCogOutlineIcon: FC<IconInterface> = ({
  className,
  ...propsRest
}) => {
  const classNames =  `MessageCogOutlineIcon ${className}`;
  return (
    <Icon alt="MessageCogOutline" className={classNames} {...propsRest}>
      <path d="M16.77 11.32L15.7 10.5C15.71 10.33 15.71 10.16 15.7 10C15.72 9.84 15.72 9.67 15.7 9.5L16.76 8.68C16.85 8.6 16.88 8.47 16.82 8.36L15.82 6.63C15.76 6.5 15.63 6.47 15.5 6.5L14.27 7C14 6.8 13.73 6.63 13.42 6.5L13.23 5.19C13.21 5.08 13.11 5 13 5H11C10.88 5 10.77 5.09 10.75 5.21L10.56 6.53C10.26 6.65 9.97 6.81 9.7 7L8.46 6.5C8.34 6.46 8.21 6.5 8.15 6.61L7.15 8.34C7.09 8.45 7.11 8.58 7.21 8.66L8.27 9.5C8.23 9.82 8.23 10.16 8.27 10.5L7.21 11.32C7.12 11.4 7.09 11.53 7.15 11.64L8.15 13.37C8.21 13.5 8.34 13.53 8.46 13.5L9.7 13C9.96 13.2 10.24 13.37 10.55 13.5L10.74 14.81C10.77 14.93 10.88 15 11 15H13C13.12 15 13.23 14.91 13.25 14.79L13.44 13.47C13.74 13.34 14 13.18 14.28 13L15.53 13.5C15.65 13.5 15.78 13.5 15.84 13.37L16.84 11.64C16.9 11.53 16.87 11.4 16.77 11.32M12 11.5C11.16 11.5 10.5 10.83 10.5 10C10.5 9.17 11.17 8.5 12 8.5S13.5 9.17 13.5 10 12.83 11.5 12 11.5M20 2H4C2.9 2 2 2.9 2 4V22L6 18H20C21.11 18 22 17.11 22 16V4C22 2.9 21.11 2 20 2M20 16H6L4 18V4H20" />

    </Icon>
  );
};
MessageCogOutlineIcon.displayName = 'MessageCogOutlineIcon';
  