import Navbar from "../Navbar";
import Footer from "../Footer/Footer.jsx";
// import { Helmet } from "react-helmet";
import {Helmet } from "react-helmet"


function Layout({ children, description, keywords, author, title }) {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta name="author" content={author} />
        <title>{title}</title>
      </Helmet>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
Layout.defaultProps = {
  title: "Dialkro Business ",
  description: "Business Listing Website",
  keywords:
    "Mobile, Women Fashion, Men Fashion, Clothes, Electronics, Furniture, Bags, Shoes, Accessories",
  author: "Prem Kumar Maurya",
};

export default Layout;
