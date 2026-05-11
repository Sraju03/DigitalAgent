type ChevronLeftProps = {
  size?: number;
  color?: string;
  className?: string;
};

const ChevronLeft = ({
  size = 24,
  color = "currentColor",
  className = "",
}: ChevronLeftProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth={2}
    className={`lucide-chevron-left ${className}`}
  >
    <path d="m15 18-6-6 6-6" />
  </svg>
);

export default ChevronLeft;
