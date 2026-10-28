import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const variants = {
  primary: "btn-primary",
  ghost: "btn-ghost",
  paper: "btn-paper",
};

export default function Button({
  to,
  children,
  variant = "primary",
  arrow = false,
  className = "",
  type = "button",
  disabled = false,
  onClick,
}) {
  const classes = `btn ${variants[variant]} ${className}`;
  const content = (
    <>
      <span>{children}</span>
      {arrow ? <ArrowRight aria-hidden="true" size={16} className="btn-arrow" /> : null}
    </>
  );

  if (to) {
    return (
      <Link to={to} className={classes} onClick={onClick}>
        {content}
      </Link>
    );
  }

  return (
    <button type={type} className={classes} disabled={disabled} onClick={onClick}>
      {content}
    </button>
  );
}
