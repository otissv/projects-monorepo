import React, { FC } from 'react';
import { Icon, IconInterface } from "@redesign-system/react/libs";

export const RacquetballIcon: FC<IconInterface> = ({
  className,
  ...propsRest
}) => {
  const classNames =  `RacquetballIcon ${className}`;
  return (
    <Icon alt="Racquetball" className={classNames} {...propsRest}>
      <path d="M18.5,16C19.9,16 21,17.1 21,18.5C21,19.9 19.9,21 18.5,21C17.1,21 16,19.9 16,18.5C16,17.1 17.1,16 18.5,16M10.5,1C3,1 3,3.7 3,9.8C3,13.2 6.4,16.9 9,18.1V23H12V18.1C14.6,16.9 18,13.2 18,9.8C18,3.6 18,1 10.5,1M15.4,4.2C15.7,4.6 15.8,5.2 15.9,6H15V3.8C15.2,3.9 15.3,4.1 15.4,4.2M16,9.8C16,9.9 16,10 16,10H15V7H16C16,7.8 16,8.7 16,9.8M14,14H11V11H14V14M7,14V11H10V14H7M5,9.8C5,8.8 5,7.9 5,7H6V10H5C5,9.9 5,9.8 5,9.8M7,7H10V10H7V7M11,3C12.4,3 13.4,3.2 14,3.3V6H11V3M10,6H7V3.4C7.6,3.2 8.6,3 10,3V6M11,10V7H14V10H11M6,3.8V6H5.1C5.2,5.2 5.3,4.6 5.6,4.2C5.7,4.1 5.8,4 6,3.8M5.2,11H6V12.7C5.7,12.1 5.4,11.6 5.2,11M8,15H10V16.3L9.8,16.2C9.2,16 8.6,15.5 8,15M11.2,16.3H11V15H13C12.4,15.5 11.8,16 11.2,16.3M15,12.7V11H15.8C15.6,11.5 15.3,12.1 15,12.7Z" />

    </Icon>
  );
};
RacquetballIcon.displayName = 'RacquetballIcon';
  