import React, { useEffect, useState } from "react";
import { ReactComponent as LogoSvg } from "./logo.svg";

export default function Header(props) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.pageYOffset > 10);
    onScroll(); // set initial on refresh mid-scroll
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`app-header ${
          scrolled ? "scrolled" : ""
        }`}>
        <LogoSvg className="logo" />
        <a style={{textDecoration:"none"}} href = "https://app.salescapture.ai" target="_blank" onClick={() => props.scrollTo(props.demoRef)} className="header-button">sign in</a>
    </header>
  );
}