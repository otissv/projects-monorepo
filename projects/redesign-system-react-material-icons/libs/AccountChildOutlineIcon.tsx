import React, { FC } from 'react';
import { Icon, IconInterface } from "@redesign-system/react/libs";

export const AccountChildOutlineIcon: FC<IconInterface> = ({
  className,
  ...propsRest
}) => {
  const classNames =  `AccountChildOutlineIcon ${className}`;
  return (
    <Icon alt="AccountChildOutline" className={classNames} {...propsRest}>
      <path d="M12 17C10.9 17 10 16.1 10 15C10 13.9 10.9 13 12 13C13.1 13 14 13.9 14 15C14 16.1 13.1 17 12 17M12 10C14.34 10 19 11.16 19 13.5V18.63C19 19.5 18.31 20.24 17.34 20.79V13.38C17.34 12.82 14.6 11.54 12 11.54C9.4 11.54 6.66 12.82 6.66 13.38V18.75C6.66 19 7.31 19.46 8.28 19.85C9 19 10.93 18.56 12 18.56C13.33 18.56 16 19.22 16 20.56V21.39C14.63 21.88 13.07 22.13 12 22.13C10.93 22.13 9.38 21.88 8 21.39H8C6.37 20.81 5 19.89 5 18.63V13.5C5 11.16 9.66 10 12 10M12 3.75C11.03 3.75 10.25 4.53 10.25 5.5C10.25 6.47 11.03 7.25 12 7.25C12.97 7.25 13.75 6.47 13.75 5.5C13.75 4.53 12.97 3.75 12 3.75M12 9C10.07 9 8.5 7.43 8.5 5.5C8.5 3.57 10.07 2 12 2C13.93 2 15.5 3.57 15.5 5.5C15.5 7.43 13.93 9 12 9Z" />

    </Icon>
  );
};
AccountChildOutlineIcon.displayName = 'AccountChildOutlineIcon';
  