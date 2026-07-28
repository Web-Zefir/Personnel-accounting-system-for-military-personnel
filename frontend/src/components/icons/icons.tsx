// Простые иконки в виде React-компонентов

export const ArrowIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
    <path d="M4 6L8 10L12 6" stroke="#6b6b78" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export const PlusIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
    <path d="M8 3V13M3 8H13" stroke="#fff" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

export const DotsIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
    <circle cx="3" cy="8" r="1.5" fill="#6b6b78"/>
    <circle cx="8" cy="8" r="1.5" fill="#6b6b78"/>
    <circle cx="13" cy="8" r="1.5" fill="#6b6b78"/>
  </svg>
);

export const CloseIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
    <path d="M4 4L12 12M12 4L4 12" stroke="#fff" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

export const SearchIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
    <circle cx="7" cy="7" r="4" stroke="#6b6b78" strokeWidth="1.5"/>
    <path d="M10 10L13 13" stroke="#6b6b78" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);