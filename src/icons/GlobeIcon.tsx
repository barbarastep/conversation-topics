import type { IconProps } from './types'

export function GlobeIcon({ className }: IconProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <circle
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="square"
        strokeLinejoin="miter"
      />
      <path
        d="M12 22C14.6666667 19.5757576 16 16.2424242 16 12C16 7.75757576 14.6666667 4.42424242 12 2C9.33333333 4.42424242 8 7.75757576 8 12C8 16.2424242 9.33333333 19.5757576 12 22Z"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="miter"
      />
      <path
        d="M2.5 9H21.5M2.5 15H21.5"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="miter"
      />
    </svg>
  )
}
