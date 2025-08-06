import Header from "./header.jsx";
import { ReactComponent as HeroGraphic } from "./Sales_Capture_hero_graphic.svg";
import { ReactComponent as Robot } from "./Sales Ai Robot.svg";
import { ReactComponent as AgentRobot } from "./SalesManRobot.svg";
import { ReactComponent as SalesDocument } from "./SalesDocument.svg";
// import { ReactComponent as Logo } from "./logo.svg";

import React, { useRef } from "react";
import "./App.css";

function App() {
  const demoRef = useRef(null);

  const scrollTo = (ref, behavior = "smooth") => {
    if (ref?.current) {
      ref.current.scrollIntoView({ behavior, block: "start" });
    }
  };

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
        style={{
          backgroundColor: "var(--lightest-accent)",
        }}
      >
        <div className="panel">
          <div className="panel-text">
            <h2 style={{ color: "var(--text-accent)" }}>
              Prospect Research Agent
            </h2>
            <div style={{ color: "var(--text-accent)" }}>
              SalesCapture’s AI Research Agent constantly hunts down the next
              best sales targets from multiple data sources and presents those
              prospects for sales engagement.
            </div>
            <button
              className="header-button"
              style={{ marginTop: "22px" }}
              onClick={() => scrollTo(demoRef)}
            >
              Demo
            </button>
          </div>
          <div className="panel-graphic">
            <SalesDocument
              className="robot"
              style={{ width: "320px", height: "320px" }}
            />
          </div>
        </div>
        <div className="panel panel-text-long">
          The SalesCaptures AI research agent finds your next best sales
          targets. Sales teams are drowning in data. Whether in your CRM,
          marketing leads, or 3rd party data platforms, sales people must sift
          through mountains of data to find their next best prospect. The truth
          is, they don’t look long, if they look at all; they just take the next
          name on the list. SalesCapture’s AI Research Agent constantly hunts
          down the next best sales targets amid the masses and presents those
          prospects for sales engagement.
        </div>
      </section>

      <section>
        <div className="panel">
          <div className="panel-graphic">
            <Robot className="robot" />
          </div>
          <div className="panel-text">
            <h2>AI Powered Sales Content That Works</h2>
            <div className="subtitle">
              Arm your sales team with the SalesCapture AI Content Studio to
              quickly generate the best sales content based on your product’s
              value proposition, prospect persona, and sales need.
            </div>
            <button
              className="header-button"
              style={{ marginTop: "22px" }}
              onClick={() => scrollTo(demoRef)}
            >
              Demo
            </button>
          </div>
        </div>
        <div className="panel panel-text-long">
          SalesCapture AI sales content platform provides the best sales content
          your sales team can use with a single click. The platform’s
          intelligence is derived from the best modern sales minds and methods
          combined with careful training of your products’ value propositions.
          The SalesCapture AI content engine is far more than simple LLM driven
          content creation. SalesCapture AI combines key aspects of your value
          proposition with best practices to generate the most effective sales
          messaging for multiple use cases.
        </div>
      </section>

      <section
        style={{
          backgroundColor: "var(--light-accent)",
        }}
      >
        <div className="panel">
          <div className="panel-text">
            <h2 style={{ color: "var(--text-accent)" }}>
              Automated BDR Solutions
            </h2>
            <div style={{ color: "var(--text-accent)" }}>
              SalesCapture’s AI-powered sales engagement platform puts new
              prospects into Outbound sequences on behalf of the sales person
              using content designed for prospect conversion.
            </div>
            <button
              className="header-button"
              style={{ marginTop: "22px",}}
              onClick={() => scrollTo(demoRef)}
            >
              Demo
            </button>
          </div>
          <div className="panel-graphic">
            <AgentRobot
              className="robot"
              style={{ width: "320px", height: "320px" }}
            />
          </div>
        </div>
        <div className="panel panel-text-long">
          SalesCapture AI enables fully automated, partially automated and
          “shadow BDR” solutions to enhance your team’s go-to-market
          capabilities. As the research agent finds new prospects the agent can
          automatically put the prospect into an outbound sales campaign, using
          our integrated campaign delivery platform or using third party sales
          engagement platforms like Outreach.io. A semi automated solution
          allows the sales team to review data that the agent produces before
          placing the prospect into a sales motion. SalesCapture AI can create a
          virtual BDR behind every sales rep, working 24/7, as a shadow BDR
          helping your sales team find and close more deals!
        </div>
      </section>

      <section
        ref={demoRef}
        className="contact-form"
        style={{ background: "var(--lightest-accent)" }}
      >
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
