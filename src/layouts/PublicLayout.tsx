import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

interface PublicLayoutProps {
  transparentBar?: boolean;
  children: React.ReactNode;
}

const PublicLayout: React.FC<PublicLayoutProps> = ({
  transparentBar = false,
  children,
}) => {
  return (
    <div>
      <header>
        <Navbar transparent={transparentBar} />
      </header>
      <main>{children}</main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default PublicLayout;
