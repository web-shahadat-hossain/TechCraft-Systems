import Navbar from "../share/Navbar";

const RootLayout = ({ children }) => {
  return (
    <>
      <div>
        <Navbar />
        {children}
        {/* <Footer/> */}
      </div>
    </>
  );
};

export default RootLayout;
