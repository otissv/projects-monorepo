import React, { FC } from 'react';
import { Icon, IconInterface } from "@redesign-system/react/libs";

export const CartArrowDownIcon: FC<IconInterface> = ({
  className,
  ...propsRest
}) => {
  const classNames =  `CartArrowDownIcon ${className}`;
  return (
    <Icon alt="CartArrowDown" className={classNames} {...propsRest}>
      <path d="M10,0V4H8L12,8L16,4H14V0M1,2V4H3L6.6,11.59L5.25,14.04C5.09,14.32 5,14.65 5,15A2,2 0 0,0 7,17H19V15H7.42C7.29,15 7.17,14.89 7.17,14.75L7.2,14.63L8.1,13H15.55C16.3,13 16.96,12.59 17.3,11.97L21.16,4.96L19.42,4H19.41L18.31,6L15.55,11H8.53L8.4,10.73L6.16,6L5.21,4L4.27,2M7,18A2,2 0 0,0 5,20A2,2 0 0,0 7,22A2,2 0 0,0 9,20A2,2 0 0,0 7,18M17,18A2,2 0 0,0 15,20A2,2 0 0,0 17,22A2,2 0 0,0 19,20A2,2 0 0,0 17,18Z" />

    </Icon>
  );
};
CartArrowDownIcon.displayName = 'CartArrowDownIcon';
  