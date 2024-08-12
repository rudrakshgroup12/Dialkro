import Navbar from "../Navbar";
import Footer from "../Footer/Footer.jsx";
// import { Helmet } from "react-helmet";
import { Helmet } from "react-helmet";
import { Toaster } from "react-hot-toast";

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
      <main>
        <Toaster />
        {children}
      </main>
      <Footer />
    </div>
  );
}
Layout.defaultProps = {
  title: "Dialkro Business ",
  description: "Business Listing Website",
  keywords:
    "Mobile, Women Fashion, Men Fashion, Clothes, Electronics, Furniture, Bags, Shoes, Accessories, Restaurants, Plumbers, Hair Salons, Lawyers, Real Estate Agents, Auto Repair Shops, Emergency Plumbing Services, Same-Day Delivery Services, Affordable Legal Services, 24/7 Customer Support, Organic Groceries, Handmade Crafts, Custom Furniture, Tech Gadgets, Highest Rated Restaurants, Top Reviews for Plumbers, 5-Star Hair Salons, Family-Owned, Eco-Friendly, Licensed and Insured, Free Consultation, Wedding Venues, Conference Centers, Event Planning Services, Vegan Restaurants, Luxury Car Rentals, Pet-Friendly Hotels, Boutique Clothing Stores, Discounts on Electronics, Special Offers for Furniture, Coupons for Shoes",
  author: "Prem Kumar Maurya",
};

export default Layout;
