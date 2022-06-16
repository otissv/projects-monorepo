import React, { FC } from 'react';
import { Icon, IconInterface } from "@redesign-system/react/libs";

export const MoleculeCoIcon: FC<IconInterface> = ({
  className,
  ...propsRest
}) => {
  const classNames =  `MoleculeCoIcon ${className}`;
  return (
    <Icon alt="MoleculeCo" className={classNames} {...propsRest}>
      <path d="M8 7C6.9 7 6 7.9 6 9V15C6 16.11 6.9 17 8 17H11V15H8V9H11V7H8M14 7C12.9 7 12 7.9 12 9V15C12 16.11 12.9 17 14 17H16C17.11 17 18 16.11 18 15V9C18 7.9 17.11 7 16 7H14M14 9H16V15H14V9" />

    </Icon>
  );
};
MoleculeCoIcon.displayName = 'MoleculeCoIcon';
  