import Navbar from "../share/Navbar";
import Footer from "./Footer";

const RootLayout = ({ children }) => {
  return (
    <>
      <div>
        <Navbar />
        {children}
        <Footer />
      </div>
    </>
  );
};

export default RootLayout;
