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
    <>
    <div className="container-privacy-policy">

    <div className="privacy-policy">
    <h1>Terms & Conditions</h1>
<p>Welcome to Ceative Limited! These terms and conditions govern your use of our website and services. By accessing and using this website, you agree to comply with and be bound by these terms and conditions. If you disagree with any part of these terms and conditions, please do not use our website.</p>

<h2>1. Definitions</h2>
<p>We, us, and our refer to Ceative Limited.</p>
<p>You refers to the user or viewer of our website.</p>
<p>Website refers to the website operated by Ceative Limited.</p>


<h2>Services Offered</h2>
<p>Ceative Limited provides a range of IT services including consultancy, software development, and solutions in the field of video games. By utilizing our services, you agree to abide by the terms and conditions outlined herein.</p>

<h2>2. Intellectual Property</h2>
<p>All content, trademarks, and intellectual property rights displayed on this website are owned by Ceative Limited. You may not reproduce, distribute, or use any content from this website without prior written consent from Ceative Limited.</p>

<h2>3. Limitation of Liability</h2>
<p>Ceative Limited shall not be liable for any direct, indirect, incidental, consequential, or punitive damages arising out of your use of our website or services. We make no warranties or representations regarding the accuracy or completeness of the information provided on our website.</p>
<h2>3. Privacy Policy</h2>

<p>Your privacy is important to us. Please refer to our Privacy Policy to understand how we collect, use, and protect your personal information.</p>

<h2>4. Governing Law</h2>
<p>These terms and conditions shall be governed by and construed in accordance with the laws of England and Wales. Any disputes arising out of or related to these terms and conditions shall be subject to the exclusive jurisdiction of the courts of England and Wales.</p>

<h2>5. Amendments</h2>
<p>Ceative Limited reserves the right to amend these terms and conditions at any time without prior notice. It is your responsibility to review these terms periodically for any changes.</p>

<h2>6. Contact Us</h2>
<p>If you have any questions or concerns about these terms and conditions, please contact us at <a href="mailto:info@ceativelimited.co.uk">info@ceativelimited.co.uk</a>.</p>

<p>Thank you for choosing Ceative Limited.</p>

    </div>

    </div>  
    <footer className="footer">
           {/* Logo on the left */}
           <div className="footer-left">
           <a href="/">
              <img src="img/logo/Logo.svg" alt="" />
            </a>           </div>
           
           {/* Links in the middle */}
           <div className="footer-center">
               <a href="/terms-and-conditions">Terms & Conditions</a>
               <a href="/privacy-policy">Privacy Policy</a>
           </div>
           
       </footer>
    </>
  );
};
export default Index;
