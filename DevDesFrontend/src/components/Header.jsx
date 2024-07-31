import React, { useEffect, useState } from "react";
import logo from "/logo.svg";
import "./Header.css";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(window.matchMedia("(max-width: 768px)").matches);

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      const navLi = document.querySelectorAll(".header--button li");

      let currentSection = "";
      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        if (window.scrollY >= sectionTop - 50) {
          currentSection = section.getAttribute("id");
        }
      });

      navLi.forEach((li) => {
        li.classList.remove("active");
        if (li.textContent.replace(/\s+/g, '').toLowerCase() === currentSection) {
          li.classList.add("active");
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 768px)");

    const handleMediaChange = (event) => {
      setIsSmallScreen(event.matches);
      if (!event.matches) {
        const mainContent = document.querySelector(".main-content");
        mainContent.classList.remove("blurred");
      }
    };

    mediaQuery.addEventListener("change", handleMediaChange);

    return () => {
      mediaQuery.removeEventListener("change", handleMediaChange);
    };
  }, []);

  const handleClick = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
    }
    setMenuOpen(false);
    if (isSmallScreen) {
      const mainContent = document.querySelector(".main-content");
      mainContent.classList.remove("blurred");
    }
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    if (isSmallScreen) {
      const mainContent = document.querySelector(".main-content");
      if (!menuOpen) {
        mainContent.classList.add("blurred");
      } else {
        mainContent.classList.remove("blurred");
      }
    }
  };

  return (
    <header className="header">
      <img src={logo} className="header--logo" alt="Logo" />
      <button className="menu-toggle" onClick={toggleMenu}>
        <i className="fa-solid fa-bars"></i>
      </button>
      <div className={`header--buttons ${menuOpen ? "open" : ""}`}>
        <ul className="header--button">
          <li className="active" onClick={() => handleClick('home')}>Home</li>
          <li onClick={() => handleClick('aboutme')}>About Me</li>
          <li onClick={() => handleClick('skills')}>Skills</li>
          <li onClick={() => handleClick('projects')}>Projects</li>
          <li onClick={() => handleClick('contact')}>Contact</li>
        </ul>
      </div>
    </header>
  );
}


