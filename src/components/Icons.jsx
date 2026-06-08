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
