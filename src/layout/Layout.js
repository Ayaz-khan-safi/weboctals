import Head from "next/head";
import { Fragment, useEffect } from "react";
import ImageView from "../components/popup/ImageView";
import VideoPopup from "../components/popup/VideoPopup";
import {
  activeSkillProgress,
  customCursor,
  dataImage,
  preloader,
  scroll_,
} from "../utilits";
import MobileMenu from "./MobileMenu";
import Mouse from "./Mouse";
import Preloader from "./Preloader";
import SidebarMenu from "./SidebarMenu";

const Layout = ({ children, intro }) => {
  useEffect(() => {
    dataImage();
    preloader();
    customCursor();
    window.addEventListener("scroll", scroll_);
    window.addEventListener("scroll", activeSkillProgress);
  }, []);
  return (
    <Fragment>
      <Head>
        <title>Mer's </title>

        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Preloader />

      <ImageView />
      <VideoPopup />
      <div className="mers_tm_all_wrap" data-magic-cursor="show">
        {intro ? (
          <Fragment>{children}</Fragment>
        ) : (
          <Fragment>
            {/* MOBILE MENU */}
            <MobileMenu />
            {/* /MOBILE MENU */}
            {/* LEFTPART */}
            <SidebarMenu />
            {/* /LEFTPART */}
            {/* RIGHTPART */}
            <div className="mers_tm_rightpart">
              <div className="rightpart_inner">{children}</div>
            </div>
          </Fragment>
        )}
        {/* /RIGHTPART */}
        {/* CURSOR */}
        <Mouse />
        {/* /CURSOR */}
      </div>
    </Fragment>
  );
};
export default Layout;
