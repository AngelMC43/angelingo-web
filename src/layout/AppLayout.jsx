import Footer from "./Footer/Footer";
import Navbar from "./Navbar/Navbar";
import "./appLayout.css";

export default function AppLayout({ children }) {
  return (
    <div>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}
