import React, { useEffect, useState } from "react";
import { ReactComponent as LogoSvg } from "./logo.svg";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", () =>
        setScrolled(window.pageYOffset > 10)
      );
    }
  }, []);

  return (
    <header className={`app-header ${
          scrolled ? "scrolled" : ""
        }`}>
        <LogoSvg className="logo" />
        <button className="header-button">sign up</button>
    </header>
  );
}