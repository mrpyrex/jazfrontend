import { useRouter } from "next/router";
import Meta from "./Meta";
import Footer from "./shared/Footer";
import Header from "./shared/Header";

const Layout = ({ children }) => {
  const router = useRouter();
  const isAdmin = router.pathname === "/admin";
  return (
    <main>
      <Meta />
      {!isAdmin && <Header />}
      {children}
      {!isAdmin && <Footer />}
    </main>
  );
};

export default Layout;
