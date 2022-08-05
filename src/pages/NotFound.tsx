import { NotFoundSvg } from "../assets/Icons";

const NotFoundPage: React.FC = () => {
  return (
    <div className="flex items flex-col gap-16 relative items-center justify-center h-screen">
      <h1 className="text-4xl">Page not found</h1>
      <NotFoundSvg className="h-1/2"/>
    </div>
  );
}

export default NotFoundPage;