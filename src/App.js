import Header from "./header.jsx";
import { ReactComponent as HeroGraphic } from "./Sales_Capture_hero_graphic.svg";
import { ReactComponent as Robot } from "./Sales Ai Robot.svg";
import { ReactComponent as AgentRobot } from "./SalesManRobot.svg";
import { ReactComponent as SalesDocument } from "./SalesDocument.svg";
// import { ReactComponent as Logo } from "./logo.svg";

import React from "react";
import "./App.css";

function App() {
  return (
    <div className="app">
      <Header />

      <section className="hero">
        <div className="hero-text">
          <h1 className="hero-heading" style={{ color: "var(--text-accent)" }}>
            SalesCapture’s AI agent powers your sales team
          </h1>
          <div className="subtitle">
            The SalesCapture AI Agent finds new prospects, automates engagement,
            and keeps sales people focused on their primary job: generating
            revenue.{" "}
          </div>
        </div>
        <div className="hero-image">
          <HeroGraphic className="hero-graphic" />
        </div>
      </section>

      <section
        className="panel"
        style={{
          backgroundColor: "var(--lightest-accent)",
        }}
      >
        <div className="panel-text">
          <h2 style={{ color: "var(--text-accent)" }}>
            Prospect Research Agent
          </h2>
          <div style={{ color: "var(--text-accent)" }}>
            SalesCapture’s AI Research Agent constantly hunts down the next best
            sales targets from multiple data sources and presents those
            prospects for sales engagement.
          </div>
        </div>
        <div className="panel-graphic">
          <SalesDocument className="robot" style={{width:"320px", height:"320px"}}/>
        </div>
      </section>

      <section className="panel">
        <div className="panel-graphic">
          <Robot className="robot" />
        </div>
        <div className="panel-text">
          <h2>AI Powered Sales Engagement</h2>
          <div className="subtitle">
            The SalesCapture AI Agent finds new prospects, automates engagement,
            and keeps sales people focused on their primary job: generating
            revenue.
          </div>
        </div>
      </section>

      <section
        className="panel"
        style={{
          backgroundColor: "var(--light-accent)",
        }}
      >
        <div className="panel-text">
          <h2 style={{ color: "var(--text-accent)" }}>
            Automated BDR Solutions
          </h2>
          <div style={{ color: "var(--text-accent)" }}>
            SalesCapture’s AI-powered sales engagement platform puts new
            prospects into Outbound sequences on behalf of the sales person
            using content designed for prospect conversion.
          </div>
        </div>
        <div className="panel-graphic">
          <AgentRobot className="robot" style={{width:"320px", height:"320px"}}/>
        </div>
      </section>

      <section className="contact-form" style={{background:"var(--lightest-accent)"}}>
        <form>
          <h2>Request a Demo</h2>
          <label>Name</label>
          <input type="text" name="name" placeholder="Your name.."></input>

          <label>Email Address</label>
          <input
            type="email"
            name="email"
            placeholder="joeschmo@mail.com..."
          ></input>

          <label>Additional Comments</label>
          <input
            type="text"
            name="comments"
            placeholder="Your comments..."
          ></input>

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
