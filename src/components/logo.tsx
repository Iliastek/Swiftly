import type React from "react";

type ImgProps = Omit<React.ComponentProps<"img">, "src" | "alt">;

export const LogoIcon = (props: ImgProps) => (
  <img src="/swiftlylogo.png" alt="Swiftly Logo" {...props} />
);

export const Logo = (props: ImgProps) => (
  <img src="/swiftlylogo.png" alt="Swiftly Logo" {...props} />
);
