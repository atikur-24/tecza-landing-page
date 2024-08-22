const Button = ({ children, variant = "primary", size = "medium", ...props }) => {
  const variantClass = variant === "outline" ? "btn-outline" : variant === "secondary" ? "btn-secondary" : "btn-primary";
  const sizeClass = size === "small" ? "btn-small" : size === "large" ? "btn-large" : "btn-medium";

  const className = `${variantClass} ${sizeClass}`;

  return (
    <button {...props} className={className}>
      {children}
    </button>
  );
};

export default Button;
