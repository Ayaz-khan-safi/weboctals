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

const Portfolio = dynamic(() => import("../src/components/Portfolio"), {
  ssr: false,
});

const Index = () => {
  return (
    <Layout>
      <Home />
      {/* /HERO */}
      {/* ABOUT */}
      <About />
      {/* /ABOUT */}
      {/* SERVICE */}
      <Service />
      {/* /SERVICE */}
      {/* PORTFOLIO */}
      {/* <Portfolio /> */}
      {/* /PORTFOLIO */}
      {/* SKILLS */}
      {/* <Skills /> */}
      {/* /SKILLS */}
      {/* PRICING */}
      {/* <Pricing /> */}
      {/* /PRICING */}
      {/* TESTIMONIALS */}
      {/* <Testimonials /> */}
      {/* /TESTIMONIALS */}
      {/* NEWS */}
      {/* <News /> */}
      {/* /NEWS */}
      {/* CONTACT */}
      <Contact />
    </Layout>
  );
};
export default Index;
