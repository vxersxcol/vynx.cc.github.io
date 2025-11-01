import React from 'react';

type IconProps = {
  className?: string;
};

export const DiscordIcon: React.FC<IconProps> = ({ className }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M20.317 4.36981C18.883 3.59388 17.292 3 15.617 3C13.626 3 11.758 3.69319 10.158 4.80881C8.558 5.925 7.325 7.42181 6.642 9.13681C4.783 9.40319 3.233 10.1119 2 11.2019C2 11.2019 2.183 14.9319 6.417 17.65C6.417 17.65 6.617 17.1531 6.942 16.7119C5.35 15.5494 4.883 14.0719 4.883 14.0719C4.883 14.0719 5.217 14.3381 5.75 14.7319C6.425 15.2531 7.217 15.7031 8.283 16.205C9.283 16.655 10.45 17.0281 11.75 17.295C12.333 17.4281 12.933 17.5281 13.55 17.595C14.167 17.6619 14.783 17.695 15.383 17.695C18.617 17.695 21.567 15.8269 21.567 15.8269C21.567 15.8269 20.733 13.3881 18.217 11.2019C19.333 9.94944 20.017 8.50319 20.317 6.96181C20.517 5.99819 20.5 5.16319 20.317 4.36981ZM12.016 14.325C10.933 14.325 10.033 13.41 10.033 12.31C10.033 11.21 10.917 10.295 12.016 10.295C13.116 10.295 14.016 11.21 14.016 12.31C14.016 13.41 13.116 14.325 12.016 14.325ZM16.816 14.325C15.733 14.325 14.833 13.41 14.833 12.31C14.833 11.21 15.717 10.295 16.816 10.295C17.916 10.295 18.816 11.21 18.816 12.31C18.816 13.41 17.916 14.325 16.816 14.325Z" />
  </svg>
);

export const LightningIcon: React.FC<IconProps> = ({ className }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
  </svg>
);

export const ResponseTimeIcon: React.FC<IconProps> = ({ className }) => (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
);

export const ReliabilityIcon: React.FC<IconProps> = ({ className }) => (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
    </svg>
);

export const CheckIcon: React.FC<IconProps> = ({ className }) => (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
    </svg>
);

export const CloseIcon: React.FC<IconProps> = ({ className }) => (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
    </svg>
);

export const VynxIcon: React.FC<IconProps> = ({ className }) => (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12l7-7 7 7" transform="rotate(45 12 12)" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12l7 7 7-7" transform="rotate(45 12 12)" />
    </svg>
);
