import Header from './header.jsx';
import { ReactComponent as HeroGraphic } from "./Sales_Capture_hero_graphic.svg";
import { ReactComponent as Robot } from "./Sales Ai Robot.svg";
import { ReactComponent as Logo } from "./logo.svg";

import React, { useEffect, useState } from "react";
import './App.css';

function App() {
  return (
    <div className="app">
      <Header />

      <section className="hero">
        <div className="hero-text">
          <h1 className="hero-heading" style={{color: "var(--text-accent)"}}>An AI agent that powers your sales team</h1>
          <div className="subtitle">The SalesCapture AI Agent finds new prospects, automates engagement, and keeps sales people focused on their primary job: generating revenue.</div>
        </div>
        <div className="hero-image">
          <HeroGraphic className="hero-graphic" />
        </div>
      </section>

      <section className="panel" style={{backgroundColor: "var(--light-accent)", flexDirection: "column", gap: "10px", padding: "80px 50px 80px 50px", minHeight: "0px"}}>
          <h2 style={{color: "var(--text-accent)"}}>Prospect Research Agent</h2>
          <div style={{color: "var(--text-accent)"}}>The SalesCaptures AI research agent finds your next best sales targets. Sales teams are downing in data. Whether in your CRM, marketing leads, or 3rd party data platforms, sales people must sift through mountains of data to find the next best target to prospect. The truth is, they don’t look long, if they look at all; they just take the next name on the list. SalesCapture’s AI Research Agent constantly hunts down the next best sales targets amid the masses and presents those prospects for sales engagement.</div>
      </section>

      <section className="panel">
        <div className="panel-graphic">
          <Robot className="robot" />
        </div>
        <div className="panel-text">
          <h2>AI Powered Sales Engagement</h2>
          <div className="subtitle">The SalesCapture AI Agent finds new prospects, automates engagement, and keeps sales people focused on their primary job: generating revenue.</div>
        </div>
      </section>

      <section className="panel">
        <div className="panel-text">
          <h2>Enhance Sales Focus</h2>
        </div>
        <div className="panel-graphic">Graphic Here</div>
      </section>

      <section className="contact-form">
        <form>
          <h2>Request a Demo</h2>
          <label>Name</label>
          <input type="text" name="name" placeholder="Your name.."></input>

          <label>Email Address</label>
          <input type="email" name="email" placeholder="joeschmo@mail.com"></input>

          <label>Additional Comments</label>
          <input type="text" name="comments" placeholder="Your comments..."></input>

          <input type="submit" value="Submit"></input>
        </form>
      </section>

      <footer>
        <div>Copyright © 2025 Salescaptureai LLC. All rights reserved.</div>
        <nav className="footer-links">
          <div>data privacy</div>
          <div>terms of use</div>
        </nav>
      </footer>
    </div>
  );
}

export default App;
