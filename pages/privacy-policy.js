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
    <h1>Privacy Policy</h1>
<p>At Ceative Limited, we are dedicated to protecting your privacy. This privacy policy outlines how we collect and use any information you provide when using our website, services, or subscribing to our communications.</p>

<h2>Information Collection</h2>
<p>We may collect limited personal data when you submit inquiries through our website. Ceative Limited is compliant with data protection regulations and implements security measures to protect your data.</p>

<h2>Use of Information</h2>
<p>We use the information gathered to:</p>
<ul>
  <li>Understand your needs and provide better service.</li>
  <li>Maintain internal records.</li>
  <li>Improve our products and services based on feedback.</li>
  <li>Periodically send promotional emails or conduct market research, with an option to opt out.</li>
</ul>

<h2>Controlling Your Personal Information</h2>
<p>You can unsubscribe from marketing communications via the link in our emails or by emailing <a href="mailto:info@Ceativelimited.co.uk">info@Ceativelimited.co.uk</a> with <b>"unsubscribe"</b> as the subject. If you are contacted without permission, please contact us to address the issue.</p>

<p>We do not sell, distribute, or lease your personal information to third parties unless required by law.</p>

<h2>Security and Retention</h2>
<p>We employ physical, electronic, and managerial procedures to safeguard your information and prevent unauthorized access or disclosure.</p>

<ul>

<li>Enquiries are retained for 90 days.</li>
<li>Marketing opt-ins are retained until unsubscribed.</li>
<li>Client engagement data is retained for the contract period plus an additional 2 years.</li>
<li>Employee data is retained for the employment period plus an additional 2 years.</li>
</ul>

<h2>Contact Us</h2>
<p>For any inquiries or concerns about our privacy policy, please email <a href="mailto:info@Ceativelimited.co.uk">info@Ceativelimited.co.uk</a>. We are happy to address any questions you may have.</p>

<h2>Cookie Usage</h2>
<p>We use cookies for statistical analysis purposes only. These cookies do not collect personal data and are removed from the system after analysis.</p>

<p>Thank you for choosing Ceative Limited for your IT solutions.</p>

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
