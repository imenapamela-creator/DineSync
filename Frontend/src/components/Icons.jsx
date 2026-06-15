const iconDefinitions = {
  hamburger: (
    <>
      <line x1="4" y1="6" x2="20" y2="6" />
      <line x1="4" y1="12" x2="20" y2="12" />
      <line x1="4" y1="18" x2="20" y2="18" />
    </>
  ),
  home: <path d="M3 10L12 3l9 7v10a1 1 0 0 1-1 1h-5V14H9v7H4a1 1 0 0 1-1-1V10Z" />,
  menu: (
    <>
      <rect x="3" y="5" width="18" height="3" rx="1.5" />
      <rect x="3" y="10.5" width="18" height="3" rx="1.5" />
      <rect x="3" y="16" width="18" height="3" rx="1.5" />
    </>
  ),
  order: (
    <>
      <path d="M6 8h12v4H6z" />
      <path d="M8 12v6M16 12v6" />
      <path d="M5 8V6a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v2" />
    </>
  ),
  bookings: (
    <>
      <rect x="3" y="5" width="18" height="16" rx="2" />
      <path d="M3 9h18" />
      <path d="M8 3v4M16 3v4" />
    </>
  ),
  settings: (
    <>
      <circle cx="12" cy="12" r="3" />
      <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06A1.65 1.65 0 0 0 15 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 8.6 15a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 8.6a1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 15 9" />
    </>
  ),
  profile: (
    <>
      <path d="M12 12a4 4 0 1 0-4-4 4 4 0 0 0 4 4Z" />
      <path d="M4 21v-1a7 7 0 0 1 14 0v1" />
    </>
  ),
  edit: (
    <>
      <path d="M4 21h4l12-12-4-4L4 17v4Z" />
      <path d="M13.5 6.5l4 4" />
    </>
  ),
  trash: (
    <>
      <path d="M3 6h18" />
      <path d="M8 6V4h8v2" />
      <path d="M6 6v14a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V6" />
      <path d="M10 11v6" />
      <path d="M14 11v6" />
    </>
  ),
  restaurant: (
    <>
      <path d="M6 3v18" />
      <path d="M10 3v18" />
      <path d="M6 5h4M6 12h4M6 19h4" />
      <path d="M14 7h6M14 14h6" />
    </>
  ),
  favorites: <path d="M12 20s-6.5-5.1-8.2-8.3C2 8 4.7 5 8.5 5 10.9 5 12 6.5 12 6.5S13.1 5 15.5 5C19.3 5 22 8 20.2 11.7 18.5 14.9 12 20 12 20Z" fill="currentColor" />,
  cart: (
    <>
      <path d="M6 6h15l-1.5 9h-11L6 6Z" />
      <circle cx="9" cy="20" r="1" fill="currentColor" />
      <circle cx="17" cy="20" r="1" fill="currentColor" />
      <path d="M6 6l-2-2" />
    </>
  ),
  search: (
    <>
      <circle cx="11" cy="11" r="6" />
      <path d="M16 16l4 4" />
    </>
  ),
  back: <path d="M15 6l-6 6 6 6" />,
  email: (
    <>
      <path d="M3 7h18v10H3z" fill="none" />
      <path d="M3 7l9 6 9-6" />
    </>
  ),
  lock: (
    <>
      <rect x="6" y="11" width="12" height="9" rx="2" />
      <path d="M8 11V8a4 4 0 0 1 8 0v3" />
    </>
  ),
  eye: (
    <>
      <path d="M1 12s4-7 11-7 11 7 11 7-4 7-11 7-11-7-11-7Z" />
      <circle cx="12" cy="12" r="3" />
    </>
  ),
  phone: (
    <>
      <rect x="5" y="3" width="14" height="18" rx="3" />
      <circle cx="12" cy="18" r="1" fill="currentColor" />
    </>
  ),
  calendar: (
    <>
      <rect x="3" y="5" width="18" height="16" rx="2" />
      <path d="M3 9h18" />
      <path d="M8 3v4M16 3v4" />
    </>
  ),
  google: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M15.5 8.5c-.4-1.4-1.7-2.4-3.3-2.4-1.9 0-3.4 1.5-3.4 3.4 0 1.1.5 2.1 1.4 2.8l-1.3 1.1c-1.1-1-1.7-2.5-1.7-4 0-3.4 2.8-6.2 6.2-6.2 1.7 0 3.2.7 4.2 1.8l-1.3 1.3Z" />
      <path d="M12 16.5c1.5 0 2.7-.5 3.8-1.5l1.4 1.4c-1.4 1.3-3.3 2.1-5.2 2.1-3.9 0-7.1-2.5-8.3-6l1.5-1.2c.9 2.3 3 4 5.8 4Z" />
    </>
  ),
  apple: (
    <>
      <path d="M16.5 7.5c.1-1.4-.5-2.5-1.4-3.4-.8-.8-2-1.2-3.2-1.1-.1 1.4.5 2.5 1.4 3.4.9.9 2.1 1.3 3.2 1.1Z" />
      <path d="M17 9.9c-1.1-.6-2.4-.5-3.4.2-1 .7-1.6 1.8-1.5 3.1.1 1.1.6 2.1 1.3 2.9.7.8 1.8 1.5 2.9 1.5 1.2 0 2.5-.6 3.4-1.5.9-.9 1.6-2.1 1.7-3.3.1-1.1-.1-2.4-1.1-3.4Z" />
      <path d="M12.1 4c.4-.5.8-1.1.8-1.7 0-.5-.2-1.2-.8-1.7-.3-.2-.9-.2-1.3 0-.4.4-.8 1-1 1.6-.2.5-.2 1.1 0 1.7.2.4.6.8 1 .9.4.1.9 0 1.3-.2Z" />
    </>
  ),
  facebook: (
    <>
      <path d="M9 22V12H6V9h3V7.5C9 5.01 10.79 4 13.04 4c.9 0 2.1.2 2.1.2v2.4h-1.3c-1.3 0-1.7.8-1.7 1.6V9H15l-.5 3H13V22h-4Z" />
    </>
  ),
  instagram: (
    <>
      <rect x="5" y="5" width="14" height="14" rx="4" />
      <circle cx="12" cy="12" r="3" />
      <circle cx="17.5" cy="6.5" r="1.5" />
    </>
  ),
  linkedin: (
    <>
      <path d="M6 8.5h3.5v11H6v-11Z" />
      <path d="M7.75 6.5a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5Z" />
      <path d="M14 13.5c0-1.6.9-2.5 2.3-2.5 1.3 0 1.8.8 1.8 2.1v5.4h-3.5v-4.6c0-.8-.3-1.3-1-1.3-.6 0-1 .4-1 .9v5h-3.5v-11h3.5v1.5" />
    </>
  ),
  x: (
    <>
      <path d="M6 6l12 12" />
      <path d="M18 6L6 18" />
    </>
  ),
  clock: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 3" />
    </>
  ),
  check: <path d="M5 13l4 4L19 7" />,
  default: <path d="M3 12h18" />,
};

export function Icon({ name = "default", size = 20, color = "currentColor", className = "" }) {
  const content = iconDefinitions[name] || iconDefinitions.default;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      style={{ color }}
      className={className}
    >
      {content}
    </svg>
  );
}
