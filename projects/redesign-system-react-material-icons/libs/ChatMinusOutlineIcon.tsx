import React, { FC } from 'react';
import { Icon, IconInterface } from "@redesign-system/react/libs";

export const ChatMinusOutlineIcon: FC<IconInterface> = ({
  className,
  ...propsRest
}) => {
  const classNames =  `ChatMinusOutlineIcon ${className}`;
  return (
    <Icon alt="ChatMinusOutline" className={classNames} {...propsRest}>
      <path d="M12 3C17.5 3 22 6.58 22 11C22 12.46 21.5 13.82 20.66 15H17.96C19.23 13.94 20 12.54 20 11C20 7.69 16.42 5 12 5C7.58 5 4 7.69 4 11C4 14.31 7.58 17 12 17L13 16.95V18.96L12 19C10.81 19 9.62 18.83 8.47 18.5C6.64 20 4.37 20.89 2 21C4.33 18.67 4.75 17.1 4.75 16.5C3.06 15.17 2.05 13.15 2 11C2 6.58 6.5 3 12 3M15 17H23V19H15V17Z" />

    </Icon>
  );
};
ChatMinusOutlineIcon.displayName = 'ChatMinusOutlineIcon';
  