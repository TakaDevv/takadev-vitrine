import { Link } from "react-router-dom";

const variants = {
  primary: "bg-brand text-white hover:bg-brand-dark disabled:bg-brand-dark",
  secondary: "bg-white text-night ring-1 ring-line ring-inset hover:bg-surface",
  inverse: "bg-white text-night hover:bg-on-night",
};

export default function Button({
  to,
  children,
  variant = "primary",
  className = "",
  type = "button",
  disabled = false,
  onClick,
}) {
  const classes = `inline-flex min-h-11 items-center justify-center rounded-lg px-5 text-sm font-semibold transition-colors disabled:cursor-not-allowed ${variants[variant]} ${className}`;

  if (to) {
    return (
      <Link to={to} className={classes} onClick={onClick}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} className={classes} disabled={disabled} onClick={onClick}>
      {children}
    </button>
  );
}
