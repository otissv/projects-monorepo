import React, { FC } from 'react';
import { Icon, IconInterface } from "@redesign-system/react/libs";

export const FerrisWheelIcon: FC<IconInterface> = ({
  className,
  ...propsRest
}) => {
  const classNames =  `FerrisWheelIcon ${className}`;
  return (
    <Icon alt="FerrisWheel" className={classNames} {...propsRest}>
      <path d="M12,19C12.86,19 13.59,19.54 13.87,20.29C14.42,20.17 14.95,20 15.46,19.77L13.7,15.62C13.18,15.87 12.61,16 12,16C11.39,16 10.82,15.87 10.3,15.62L8.54,19.77C9.05,20 9.58,20.17 10.13,20.29C10.41,19.54 11.14,19 12,19M18.25,17.76C18,17.42 17.81,17 17.81,16.5C17.81,15.41 18.71,14.5 19.81,14.5L20.12,14.53C20.37,13.73 20.5,12.88 20.5,12C20.5,11.12 20.37,10.27 20.12,9.5H19.81C18.7,9.5 17.81,8.61 17.81,7.5C17.81,7 17.97,6.59 18.25,6.24C17.1,5 15.59,4.09 13.87,3.71C13.59,4.46 12.86,5 12,5C11.14,5 10.41,4.46 10.13,3.71C8.41,4.09 6.9,5 5.75,6.24C6.03,6.59 6.2,7.03 6.2,7.5C6.2,8.61 5.3,9.5 4.2,9.5H3.88C3.63,10.28 3.5,11.12 3.5,12C3.5,12.89 3.64,13.74 3.89,14.55L4.2,14.5C5.31,14.5 6.2,15.42 6.2,16.5C6.2,17 6.04,17.43 5.76,17.77C6.08,18.12 6.44,18.44 6.81,18.73L8.71,14.27C8.26,13.62 8,12.84 8,12A4,4 0 0,1 12,8A4,4 0 0,1 16,12C16,12.84 15.74,13.62 15.29,14.27L17.19,18.73C17.57,18.44 17.92,18.11 18.25,17.76M12,23C11,23 10.16,22.26 10,21.29C9.37,21.16 8.75,20.95 8.15,20.69L7.17,23H5L6.41,19.68C5.88,19.3 5.39,18.86 4.96,18.37C4.72,18.47 4.47,18.5 4.2,18.5A2,2 0 0,1 2.2,16.5C2.2,15.88 2.5,15.32 2.97,14.95C2.66,14 2.5,13.03 2.5,12C2.5,11 2.66,10 2.96,9.08C2.5,8.71 2.2,8.15 2.2,7.5C2.2,6.41 3.09,5.5 4.2,5.5C4.46,5.5 4.71,5.56 4.93,5.65C6.25,4.18 8,3.13 10,2.71C10.16,1.74 11,1 12,1C13,1 13.84,1.74 14,2.71C16,3.13 17.74,4.18 19.06,5.64C19.29,5.55 19.54,5.5 19.81,5.5A2,2 0 0,1 21.81,7.5C21.81,8.14 21.5,8.71 21.04,9.07C21.34,10 21.5,11 21.5,12C21.5,13 21.34,14 21.04,14.93C21.5,15.3 21.81,15.87 21.81,16.5C21.81,17.62 20.92,18.5 19.81,18.5C19.54,18.5 19.29,18.46 19.05,18.36C18.61,18.85 18.12,19.29 17.59,19.68L19,23H16.83L15.85,20.69C15.25,20.95 14.63,21.16 14,21.29C13.84,22.26 13,23 12,23Z" />

    </Icon>
  );
};
FerrisWheelIcon.displayName = 'FerrisWheelIcon';
  