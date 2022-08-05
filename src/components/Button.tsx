import clsx from "clsx";

export enum ButtonIntent {
  Primary = "primary",
  Cta = "cta",
  None = "none",
}

export enum ButtonSize {
  Small = "small",
  Medium = "medium",
  Large = "large",
}

interface ButtonProps
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  size?: ButtonSize;
  intent?: ButtonIntent;
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  intent = ButtonIntent.None,
  size = ButtonSize.Small,
  children,
  className,
  ...btnProps
}) => {
  return (
    <button
      {...btnProps}
      className={clsx(
        "rounded-10 hover:shadow-md capitalize focus:shadow-md focus:outline-none focus:ring-1 ring-inherit active:shadow-md transition duration-150 ease-in-out font-medium text-lg leading-5 text-black",
        {
          "bg-cta active:bg-blue-800": intent === ButtonIntent.Cta,
          "bg-primary text-white": intent === ButtonIntent.Primary,
          "bg-white": intent === ButtonIntent.None,
        },
        {
          "py-2 px-md": size === ButtonSize.Small,
          "py-sm px-md": size === ButtonSize.Medium,
          "py-5 px-l": size === ButtonSize.Large,
        },
        className,
      )}
    >
      {children}
    </button>
  );
};

export default Button;
