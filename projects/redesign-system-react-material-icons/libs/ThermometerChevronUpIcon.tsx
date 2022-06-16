import React, { FC } from 'react';
import { Icon, IconInterface } from "@redesign-system/react/libs";

export const ThermometerChevronUpIcon: FC<IconInterface> = ({
  className,
  ...propsRest
}) => {
  const classNames =  `ThermometerChevronUpIcon ${className}`;
  return (
    <Icon alt="ThermometerChevronUp" className={classNames} {...propsRest}>
      <path d="M17.41 11.83L20.58 15L22 13.59L17.41 9L12.82 13.59L14.24 15L17.41 11.83M10 13V5C10 3.34 8.66 2 7 2S4 3.34 4 5V13C1.79 14.66 1.34 17.79 3 20S7.79 22.66 10 21 12.66 16.21 11 14C10.72 13.62 10.38 13.28 10 13M7 4C7.55 4 8 4.45 8 5V8H6V5C6 4.45 6.45 4 7 4Z" />

    </Icon>
  );
};
ThermometerChevronUpIcon.displayName = 'ThermometerChevronUpIcon';
  