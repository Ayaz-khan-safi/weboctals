import dynamic from "next/dynamic";
import About from "../src/components/About";
import Contact from "../src/components/Contact";
import Home from "../src/components/Home";
import News from "../src/components/News";
import Pricing from "../src/components/Pricing";
import Service from "../src/components/Service";
import Skills from "../src/components/Skills";
import Testimonials from "../src/components/Testimonials";
import Layout from "../src/layout/Layout";
import Footer from "../src/components/Footer";
import PrivacyPolicy from "../src/components/PrivacyPolicy";


const Index = () => {
  return (
    <>
    <PrivacyPolicy/>
    <Footer/>
</>
  );
};
export default Index;
