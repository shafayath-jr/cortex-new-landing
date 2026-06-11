import clsx from "clsx";

export type BoundedProps = {
  as?: React.ElementType;
  className?: string;
  children: React.ReactNode;
};

export default function Bounded({
  as: Comp = "section",
  className,
  children,
}: BoundedProps) {
  return (
    <Comp
      className={clsx(
        "px-4 py-10 md:px-6 md:py-12 lg:px-20 lg:py-20 mx-auto w-full max-w-480",
        className,
      )}
    >
      {children}
    </Comp>
  );
}
