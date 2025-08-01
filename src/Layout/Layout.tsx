import NavbarCustom from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { Outlet} from "react-router-dom";
import TitleUpdater from "../TitleUpdater/TitleUpdater";

export default function Layout() {
  return (
    <>
        <TitleUpdater/>
        <NavbarCustom/>
        <Outlet />
        <Footer />
    </>
  )
}