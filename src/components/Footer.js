import React from 'react';
import { fb, instagram, twitter } from '../svgImg';

function Footer() {
  return (

    <>
      <div className="mers_tm_section">
        <div className='footer'>
          <div className='footer-contents'>

            <div style={{ display: 'flex', flexWrap:"wrap", alignItems: 'center', justifyContent: "space-between", height: "200px" }}>
              <div className="footer-left">
              <a href="/">
                <img src="img/logo/Logo-dark.svg" alt="" />
              </a>
              </div>
              <div style={{display:'flex', gap:"15px",alignItems: "center",color:"white"}}>
                Contact
                <div style={{display:'flex', gap:"10px", alignItems: "center",}}> 
                  <div style={{ cursor:"pointer",background: "#fff", width: "40px", height: "40px", borderRadius: '50%', display: "flex", alignItems: "center", justifyContent: "center", }}>
                <a href="#" dangerouslySetInnerHTML={{ __html: fb }} style={{color:"red"}}></a>
                  </div>
                  <div style={{ cursor:"pointer",background: "#fff", width: "40px", height: "40px", borderRadius: '50%', display: "flex", alignItems: "center", justifyContent: "center", }}>
                <a href="#" dangerouslySetInnerHTML={{ __html: twitter }} style={{color:"red"}}></a>
                  </div>
                  <div style={{ cursor:"pointer",background: "#fff", width: "40px", height: "40px", borderRadius: '50%', display: "flex", alignItems: "center", justifyContent: "center", }}>
                <a href="#" dangerouslySetInnerHTML={{ __html: instagram }} style={{color:"red"}}></a>
                  </div>
                </div>
              </div>
            </div>

            <div style={{ display: "flex",flexWrap:"wrap", gap:"10px", justifyContent: "space-between", height: "40px", alignItems: "center", width: "100%" }}>
                  <p style={{color:'white'}}>
                    Design By{" "}
                   <span style={{color:'#df5646'}}>  Consultancy Outfit.</span>
   
                    © 2024{" "}
                  </p>
                           <div style={{ display: 'flex', gap: '20px' }}>
                <p> <a style={{color:"white !important"}} href="/term-and-conditions">Terms & Conditions</a></p>
                <p><a style={{color:"white !important"}} href="/privacy-policy">Privacy Policy</a></p>
              </div>
            </div>




          </div>
        </div>
      </div>
    </>

  );
}

export default Footer;

{/* <div className="contact_social">
<ul>
  <li>
    <a href="#" dangerouslySetInnerHTML={{ __html: fb }}></a>
  </li>
  <li>
    <a
      href="#"
      dangerouslySetInnerHTML={{ __html: twitter }}
    ></a>
  </li>
  <li>
    <a
      href="#"
      dangerouslySetInnerHTML={{ __html: linkedin }}
    ></a>
  </li>
  <li>
    <a
      href="#"
      dangerouslySetInnerHTML={{ __html: instagram }}
    ></a>
  </li>
</ul>
</div> */}

{/* <footer className="footer">
<div className="footer-left">
<a href="/">
   <img src="img/logo/Logo.svg" alt="" />
 </a>           </div>

<div className="footer-center">
    <a href="/terms-and-conditions">Terms & Conditions</a>
    <a href="/privacy-policy">Privacy Policy</a>
</div>

</footer> */}