import clsx from "clsx";

interface CardProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  children: React.ReactNode;
}
interface CardComposition {
  Title: typeof Title;
  Image: typeof Image;
  Content: typeof Content;
}
const Card: React.FC<CardProps> & CardComposition = ({
  className,
  children,
}) => (
  <div
    className={clsx(
      "rounded-10 border-[#F9F9F9] border border-solid bg-[#F6F8FD] py-5 px-6",
      className,
    )}
  >
    {children}
  </div>
);

interface TitleProps {
  className?: string;
  children: React.ReactNode;
}
const Title: React.FC<TitleProps> = ({className, children }) => (
  <h4 className={clsx("text-2xl font-semibold", className)}>{children}</h4>
);
Card.Title = Title;

interface ImageProps
  extends React.DetailedHTMLProps<
    React.ImgHTMLAttributes<HTMLImageElement>,
    HTMLImageElement
  > {
  alt: string;
}
const Image: React.FC<ImageProps> = ({ className, alt, ...imageProps }) => (
  <img {...imageProps} alt={alt} className={clsx("", className)} />
);
Card.Image = Image;

interface ContentProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  children: React.ReactNode;
}

const Content: React.FC<ContentProps> = ({ className, ...contentProps }) => (
  <div {...contentProps} className={clsx("", className)} />
);
Card.Content = Content;

export default Card;
