import Navbar from "~/Layout/components/Navbar";
import Footer from "~/Layout/components/Footer";
import BtnBackToTop from "~/components/BtnBackToTop";

function DefaultLayout({ children }) {
  return (
    <div>
      {/* <Navbar /> */}
      <div className="content">{children}</div>
      <Footer />
      <BtnBackToTop />
    </div>
  );
}

export default DefaultLayout;
