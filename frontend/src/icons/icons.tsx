import React from "react";

interface IconProps {
  size?: string | number;
  className?: string;
}

export const LeftSidebarIcon: React.FC<IconProps> = ({
  size = "1em",
  className,
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M21 21V3M3 12H17M17 12L10 5M17 12L10 19"
      stroke="#16b378"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const LayersIcon: React.FC<IconProps> = ({
  size = "1em",
  className,
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M2 12.0001L11.6422 16.8212C11.7734 16.8868 11.839 16.9196 11.9078 16.9325C11.9687 16.9439 12.0313 16.9439 12.0922 16.9325C12.161 16.9196 12.2266 16.8868 12.3578 16.8212L22 12.0001M2 17.0001L11.6422 21.8212C11.7734 21.8868 11.839 21.9196 11.9078 21.9325C11.9687 21.9439 12.0313 21.9439 12.0922 21.9325C12.161 21.9196 12.2266 21.8868 12.3578 21.8212L22 17.0001M2 7.00006L11.6422 2.17895C11.7734 2.11336 11.839 2.08056 11.9078 2.06766C11.9687 2.05622 12.0313 2.05622 12.0922 2.06766C12.161 2.08056 12.2266 2.11336 12.3578 2.17895L22 7.00006L12.3578 11.8212C12.2266 11.8868 12.161 11.9196 12.0922 11.9325C12.0313 11.9439 11.9687 11.9439 11.9078 11.9325C11.839 11.9196 11.7734 11.8868 11.6422 11.8212L2 7.00006Z"
      stroke="#16b378"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const RightSidebarIcon: React.FC<IconProps> = ({
  size = "1em",
  className,
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    transform="rotate(180)"
    className={className}
  >
    <path
      d="M21 21V3M3 12H17M17 12L10 5M17 12L10 19"
      stroke="#16b378"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const UndoIcon: React.FC<IconProps> = ({ size = "1em", className }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M4 9V15M4 15H10M4 15C6.32744 12.9114 8.48287 10.5468 11.7453 10.0878C13.6777 9.81593 15.6461 10.1794 17.3539 11.1234C19.0617 12.0675 20.4164 13.5409 21.2139 15.3218"
      stroke="#36b378"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const RedoIcon: React.FC<IconProps> = ({ size = "1em", className }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    transform="scale(-1, 1)"
    className={className}
  >
    <path
      d="M4 9V15M4 15H10M4 15C6.32744 12.9114 8.48287 10.5468 11.7453 10.0878C13.6777 9.81593 15.6461 10.1794 17.3539 11.1234C19.0617 12.0675 20.4164 13.5409 21.2139 15.3218"
      stroke="#36b378"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const DividerIcon: React.FC<IconProps> = ({
  size = "1em",
  className,
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 18 18"
    xmlns="http://www.w3.org/2000/svg"
    fill="#36b378"
    className={className}
  >
    <path
      fill="#36b378"
      d="M9 18c-.3 0-.5-.2-.5-.5V.5c0-.3.2-.5.5-.5s.5.2.5.5v17c0 .3-.2.5-.5.5z"
    />
  </svg>
);

export const SearchIcon: React.FC<IconProps> = ({
  size = "1em",
  className,
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M20 20L15.8033 15.8033M18 10.5C18 6.35786 14.6421 3 10.5 3C6.35786 3 3 6.35786 3 10.5C3 14.6421 6.35786 18 10.5 18C14.6421 18 18 14.6421 18 10.5Z"
      stroke="#36b378"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const NotificationIcon: React.FC<IconProps> = ({
  size = "1em",
  className,
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="#36b378"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <circle cx="18" cy="5" r="3" />
    <circle cx="6" cy="12" r="3" />
    <circle cx="18" cy="19" r="3" />
    <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
    <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
  </svg>
);

export const BellIcon: React.FC<IconProps> = ({ size = "1em", className }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="#36b378"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
    <path d="M13.73 21a2 2 0 0 1-3.46 0" />
  </svg>
);

export const DotsIcon: React.FC = () => {
  return (
    <svg viewBox="0 0 24 24" fill="none" width="16" height="16">
      <path
        d="M7 12C7 13.1046 6.10457 14 5 14C3.89543 14 3 13.1046 3 12C3 10.8954 3.89543 10 5 10C6.10457 10 7 10.8954 7 12Z"
        fill="#1fea18"
      />
      <path
        d="M14 12C14 13.1046 13.1046 14 12 14C10.8954 14 10 13.1046 10 12C10 10.8954 10.8954 10 12 10C13.1046 10 14 10.8954 14 12Z"
        fill="#1fea18"
      />
      <path
        d="M21 12C21 13.1046 20.1046 14 19 14C17.8954 14 17 13.1046 17 12C17 10.8954 17.8954 10 19 10C20.1046 10 21 10.8954 21 12Z"
        fill="#1fea18"
      />
    </svg>
  );
};
