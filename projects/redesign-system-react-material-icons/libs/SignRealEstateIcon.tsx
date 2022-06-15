import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/react";
    export const SignRealEstateIcon: FC<IconInterface> = function SignRealEstateIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `SignRealEstateIcon ${className}`;
      return (
        <Icon alt="SignRealEstate" className={classNames} {...propsRest}>
          <path d="M18 8H8C6.9 8 6 8.9 6 10V16C6 17.11 6.9 18 8 18H18C19.11 18 20 17.11 20 16V10C20 8.9 19.11 8 18 8M14 16H8V14H14V16M18 12H8V10H18V12M22 6H4V22H2V2H4V4H22V6Z" />

        </Icon>
      );
    };
    SignRealEstateIcon.displayName = 'SignRealEstateIcon';
      