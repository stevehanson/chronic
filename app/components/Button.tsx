import React from "react";

type ButtonVariant = "primary" | "ghost";
type Props = React.HTMLAttributes<HTMLButtonElement> & {
  text?: React.ReactNode;
  variant: ButtonVariant;
};

export const Button = ({
  text,
  children,
  className,
  variant,
  ...props
}: Props) => {
  let classes = buttonClasses(variant, className);

  return (
    <button className={classes} {...props}>
      {text || children}
    </button>
  );
};

export const buttonClasses = (variant: ButtonVariant, className?: string) => {
  let classes = `flex items-center justify-center rounded-md px-4 py-3 font-medium ${
    className ?? ""
  } `;
  switch (variant) {
    case "primary":
      classes += "bg-yellow-500 text-white hover:bg-yellow-600";
      break;
    case "ghost":
      classes +=
        "bg-white text-yellow-700 text-base border border-transparent shadow-sm hover:bg-yellow-50 sm:px-8";
      break;
  }

  return classes;
};
