import React, { FC } from 'react';
import { Icon, IconInterface } from "@redesign-system/react/libs";

export const ConcourseCiIcon: FC<IconInterface> = ({
  className,
  ...propsRest
}) => {
  const classNames =  `ConcourseCiIcon ${className}`;
  return (
    <Icon alt="ConcourseCi" className={classNames} {...propsRest}>
      <path d="M10.94 12.09A1.06 1.06 0 1 0 11.91 10.95A1.06 1.06 0 0 0 10.94 12.09M13.54 13.21A2.62 2.62 0 0 1 12.58 13.88L12.57 13.89A11.17 11.17 0 0 0 13.87 16.92A4.83 4.83 0 0 1 12.92 17.3A4.9 4.9 0 0 1 12.24 17.44L12.16 17.45L12.06 17.46L11.87 17.47C11.75 17.47 11.64 17.5 11.5 17.47A5 5 0 0 1 10.79 17.4A5.13 5.13 0 0 1 10.09 17.23A4.78 4.78 0 0 1 9.46 17A5 5 0 0 1 8.93 16.68A4.45 4.45 0 0 1 8.5 16.38C8.38 16.29 8.28 16.19 8.2 16.12L7.95 15.87C7.95 15.87 8 15.97 8.16 16.15C8.24 16.23 8.32 16.34 8.44 16.45A4.93 4.93 0 0 0 8.82 16.82A5.21 5.21 0 0 0 9.33 17.2A5.08 5.08 0 0 0 9.96 17.56A5.43 5.43 0 0 0 10.68 17.85A5.5 5.5 0 0 0 11.46 18.03C11.6 18.06 11.74 18.07 11.88 18.08L12.07 18.1H12.27A5.5 5.5 0 0 0 13.07 18.05A5.61 5.61 0 0 0 14.39 17.7Q14.63 18.03 14.9 18.34L14.87 18.36L14.66 18.5H14.62C14.59 18.53 14.67 18.5 14.66 18.5H14.64L14.58 18.54L14.44 18.61L14.37 18.64L14.33 18.66L14.32 18.67H14.31C14.3 18.68 14.36 18.66 14.33 18.67H14.32L14.17 18.74Q14.09 18.77 14 18.81V18.82L13.93 18.84L13.84 18.87A6.5 6.5 0 0 1 12.25 19.26A6.4 6.4 0 0 1 11.31 19.3H11.19L11.07 19.29L10.81 19.27C10.65 19.24 10.5 19.23 10.33 19.2A6.59 6.59 0 0 1 8.5 18.57C8.35 18.5 8.21 18.43 8.08 18.35C7.95 18.27 7.83 18.19 7.71 18.11A6.64 6.64 0 0 1 7.07 17.6A6.35 6.35 0 0 1 6.57 17.11C6.43 16.96 6.32 16.82 6.22 16.7C6.13 16.58 6.06 16.5 6 16.42L5.94 16.32L6 16.43C6.04 16.5 6.1 16.6 6.18 16.73C6.26 16.86 6.36 17 6.5 17.18A6.5 6.5 0 0 0 6.94 17.73A6.86 6.86 0 0 0 7.55 18.31C7.67 18.41 7.78 18.5 7.91 18.6C8.04 18.7 8.17 18.79 8.31 18.88A7.12 7.12 0 0 0 9.21 19.37A7.2 7.2 0 0 0 10.2 19.74C10.37 19.8 10.55 19.83 10.73 19.87L11 19.92L11.11 19.94L11.25 19.96A7.27 7.27 0 0 0 12.29 20.03A7.38 7.38 0 0 0 14.14 19.77L14.23 19.74L14.28 19.73L14.34 19.71C14.4 19.69 14.46 19.68 14.5 19.66L14.68 19.6L14.85 19.54L15 19.5L15.06 19.45H15.08L15.13 19.43L15.14 19.42L15.17 19.41L15.39 19.3L15.67 19.16C15.86 19.34 16.06 19.5 16.26 19.69C16.26 19.69 17.23 20.69 17.76 20.28C18.26 19.89 17.68 18.68 17.68 18.68A11.2 11.2 0 0 0 13.54 13.21M10.16 11.57L10.15 11.56A11.18 11.18 0 0 0 6.91 11.11A4.72 4.72 0 0 1 7.34 9.39L7.38 9.31L7.42 9.23L7.5 9.06C7.57 8.96 7.62 8.85 7.69 8.75A4.97 4.97 0 0 1 8.14 8.17A5.05 5.05 0 0 1 8.66 7.67A4.77 4.77 0 0 1 9.2 7.27A5.06 5.06 0 0 1 9.74 7A4.88 4.88 0 0 1 10.22 6.78C10.37 6.72 10.5 6.69 10.61 6.66C10.82 6.6 10.95 6.58 10.95 6.58S10.82 6.59 10.6 6.61C10.5 6.63 10.35 6.64 10.19 6.68A4.94 4.94 0 0 0 9.67 6.82A5.34 5.34 0 0 0 9.08 7.05A5.08 5.08 0 0 0 8.45 7.39A5.47 5.47 0 0 0 7.82 7.84A5.55 5.55 0 0 0 7.25 8.41C7.16 8.5 7.08 8.63 7 8.74L6.88 8.89L6.82 8.97L6.76 9.06A5.5 5.5 0 0 0 6.38 9.77A5.61 5.61 0 0 0 5.97 11.14L5.96 11.16C5.7 11.18 5.43 11.21 5.16 11.26V11.12L5.17 10.87V10.82C5.17 10.78 5.16 10.88 5.16 10.87V10.84L5.17 10.77L5.18 10.62L5.19 10.54V10.5H5.2V10.47C5.2 10.46 5.19 10.5 5.19 10.5L5.22 10.32L5.24 10.14L5.25 10.12V10.11L5.24 10.13L5.25 10.12V10.11L5.26 10.07L5.27 9.97A6.5 6.5 0 0 1 6.26 7.59L6.32 7.5L6.39 7.4L6.55 7.19C6.65 7.07 6.74 6.94 6.86 6.82A6.61 6.61 0 0 1 8.37 5.59C8.5 5.5 8.64 5.43 8.77 5.37C8.9 5.29 9.04 5.24 9.17 5.18A6.76 6.76 0 0 1 9.94 4.9A6.5 6.5 0 0 1 10.62 4.74C10.82 4.69 11 4.68 11.15 4.66C11.3 4.64 11.42 4.64 11.5 4.63L11.62 4.62H11.5C11.42 4.62 11.3 4.61 11.15 4.61C11 4.61 10.82 4.61 10.61 4.63A6.41 6.41 0 0 0 9.9 4.73A7.03 7.03 0 0 0 9.08 4.93C8.94 5 8.79 5.03 8.65 5.09C8.5 5.14 8.35 5.21 8.2 5.28A7.26 7.26 0 0 0 7.31 5.78A7.33 7.33 0 0 0 6.47 6.42C6.33 6.54 6.2 6.68 6.07 6.8L5.9 7L5.82 7.09L5.72 7.19A7.25 7.25 0 0 0 5.12 8.04A7.38 7.38 0 0 0 4.36 9.75L4.33 9.84L4.32 9.89L4.3 9.95L4.25 10.13L4.21 10.29L4.18 10.5L4.15 10.63C4.14 10.65 4.14 10.67 4.14 10.7L4.13 10.72V10.78L4.12 10.81L4.09 11.06L4.05 11.5C3.79 11.57 3.53 11.65 3.28 11.74C3.28 11.74 1.93 12.05 2 12.72C2.08 13.35 3.41 13.5 3.41 13.5A11.21 11.21 0 0 0 10.24 12.74A2.62 2.62 0 0 1 10.16 11.57M19.7 10.84A7.19 7.19 0 0 0 19.53 9.79C19.5 9.62 19.43 9.45 19.38 9.27L19.3 9.03L19.26 8.91L19.21 8.77A7.23 7.23 0 0 0 18.75 7.83A7.35 7.35 0 0 0 17.62 6.35L17.55 6.28L17.5 6.25L17.47 6.2L17.33 6.08L17.21 5.97L17.06 5.85L16.94 5.75L16.89 5.7L16.88 5.69H16.87L16.83 5.66L16.8 5.64L16.59 5.5L16.32 5.31Q16.42 4.88 16.5 4.45S16.88 3.11 16.25 2.85C15.67 2.61 14.91 3.72 14.91 3.72A11.21 11.21 0 0 0 12.25 10.05A2.63 2.63 0 0 1 13.32 10.55A11.2 11.2 0 0 0 15.25 8A4.73 4.73 0 0 1 16.08 8.66A4.81 4.81 0 0 1 16.53 9.19L16.58 9.25L16.63 9.33L16.74 9.5C16.8 9.59 16.86 9.69 16.92 9.8A4.89 4.89 0 0 1 17.4 11.16A4.78 4.78 0 0 1 17.5 11.83A4.88 4.88 0 0 1 17.5 12.44A4.76 4.76 0 0 1 17.44 12.96C17.42 13.11 17.39 13.25 17.36 13.36C17.31 13.57 17.27 13.7 17.27 13.7L17.41 13.37C17.45 13.26 17.5 13.14 17.54 13A5.06 5.06 0 0 0 17.67 12.46A5.34 5.34 0 0 0 17.75 11.83A5.04 5.04 0 0 0 17.76 11.11A5.38 5.38 0 0 0 17.43 9.57C17.38 9.44 17.32 9.31 17.27 9.19L17.18 9L17.14 8.93L17.09 8.83A5.53 5.53 0 0 0 15.67 7.16C15.79 6.9 15.89 6.65 16 6.38L16.03 6.41L16.25 6.53L16.28 6.54V6.55H16.29C16.32 6.57 16.24 6.5 16.25 6.53H16.26L16.27 6.54L16.33 6.58L16.45 6.66L16.5 6.71L16.56 6.73L16.57 6.74H16.58L16.56 6.73H16.57L16.71 6.84L16.85 6.94L16.87 6.96L16.86 6.95L16.87 6.96L16.91 7L17 7.05A6.46 6.46 0 0 1 18.6 9.05L18.65 9.15L18.71 9.27L18.82 9.5C18.87 9.65 18.94 9.79 19 9.95A6.69 6.69 0 0 1 19.24 10.9A6.78 6.78 0 0 1 19.35 11.86C19.36 12 19.36 12.17 19.35 12.32C19.35 12.5 19.34 12.62 19.33 12.77A6.79 6.79 0 0 1 19.2 13.58A6.4 6.4 0 0 1 19 14.25C18.96 14.45 18.89 14.62 18.84 14.76C18.78 14.9 18.73 15 18.7 15.07L18.64 15.19L18.71 15.08C18.75 15 18.81 14.91 18.88 14.78C18.95 14.64 19.04 14.5 19.12 14.29A6.5 6.5 0 0 0 19.37 13.62A6.93 6.93 0 0 0 19.59 12.81C19.61 12.66 19.64 12.5 19.66 12.35C19.68 12.19 19.7 12.03 19.7 11.87A7.1 7.1 0 0 0 19.69 10.84" />

    </Icon>
  );
};
ConcourseCiIcon.displayName = 'ConcourseCiIcon';
  