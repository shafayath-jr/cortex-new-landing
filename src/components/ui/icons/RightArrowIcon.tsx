export default function RightArrowIcon({
  className,
  ariaLabel,
  ariaHidden,
}: {
  className?: string;
  ariaLabel?: string;
  ariaHidden?: boolean;
}) {
  const resolvedAriaHidden = ariaHidden ?? !ariaLabel;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      role="img"
      aria-label={resolvedAriaHidden ? undefined : ariaLabel}
      aria-hidden={resolvedAriaHidden}
    >
      <path
        d="M5 12H19M12 19L19 12L12 5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
