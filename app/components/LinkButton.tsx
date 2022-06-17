import { Link } from "@remix-run/react";
import type { RemixLinkProps } from "@remix-run/react/components";
import React from "react";
import { buttonClasses } from "./Button";

type ButtonVariant = "primary" | "ghost";
type Props = RemixLinkProps & {
  text?: React.ReactNode;
  variant: ButtonVariant;
};

/**
 * A link that has a button appearance
 */
export const LinkButton = ({
  text,
  children,
  className,
  variant,
  ...props
}: Props) => {
  let classes = buttonClasses(variant, className);

  return (
    <Link className={classes} {...props}>
      {text || children}
    </Link>
  );
};
