import Header from "./header.jsx";
import { ReactComponent as HeroGraphic } from "./Sales_Capture_hero_graphic.svg";
import { ReactComponent as Robot } from "./Sales Ai Robot.svg";
import { ReactComponent as AgentRobot } from "./SalesManRobot.svg";
import { ReactComponent as SalesDocument } from "./SalesDocument.svg";
import salesglobe from "./sales_globe.webp";
import salesManai from "./sales_manai.webp";
import salespyramid from "./sales_pyramid.webp";
import salesMan from "./sales_man.webp";

import React, { useRef, useState, useEffect } from "react";
import "./App.css";
import LegalView from "./legalView.js";

function App() {
  const demoRef = useRef(null);

  const [view, setView] = useState("home");

  // Keep the URL hash in sync so users can share / reload
  useEffect(() => {
    const applyFromHash = () => {
      const h = window.location.hash.replace("#", "");
      if (h === "privacy" || h === "terms") setView(h);
      else setView("home");
    };
    applyFromHash();
    window.addEventListener("hashchange", applyFromHash);
    return () => window.removeEventListener("hashchange", applyFromHash);
  }, []);

  // Form state management
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [comments, setComments] = useState("");

  // State to track submission status
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState(null);

  const scrollTo = (ref, behavior = "smooth") => {
    if (ref?.current) {
      ref.current.scrollIntoView({ behavior, block: "start" });
    }
  };

  // Function to handle form submission
  const handleDemoSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission

    // Simple validation
    if (!name || !email) {
      setError("Name and Email are required.");
      return;
    }

    setIsSubmitting(true);
    setError(null);

    const formData = { name, email, comments };
    const functionUrl =
      "https://handledemorequestsendgrid-7c5i3vsqma-uc.a.run.app";

    try {
      const response = await fetch(functionUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        // Try to get error message from function response
        const errorData = await response.json();
        throw new Error(
          errorData.error || "An error occurred. Please try again."
        );
      }

      // On success, update state to show thank you message
      setIsSubmitted(true);
    } catch (err) {
      console.error("Submission Error:", err);
      setError(err.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  const goToMessage = (message) => {
    window.location.hash = message; // updates view via hash listener
  };

  return (
    <div className="app">
      <Header scrollTo={scrollTo.bind(this)} demoRef={demoRef} />
      {view === "home" ? (
        <>
          <section className="hero">
            <div className="hero-text">
              <h1 className="hero-heading">Always‑On Prospect Research.</h1>
              <h1 className="hero-heading-2">
                Delivered Directly to Your Sales Motions.
              </h1>
              <div className="subtitle">
                SalesCapture AI lets you deploy autonomous prospect research
                agents that continuously surface your next best sales targets
                and feed them directly into your outbound and revenue workflows.
              </div>
              <button
                className="header-button"
                style={{ marginTop: "22px", maxWidth: "255px" }}
                onClick={() => scrollTo(demoRef)}
              >
                Request Early Access
              </button>
            </div>
            <div className="hero-image">
              {/* <HeroGraphic className="hero-graphic" /> */}
              <img src={salesglobe} className="hero-graphic" />
            </div>
          </section>

          <section
            style={{
              backgroundColor: "var(--lightest-accent)",
            }}
          >
            <div className="panel">
              <div className="panel-graphic">
                {/* <SalesDocument
              className="robot"
              style={{ width: "320px", height: "320px" }}
            /> */}
                <img
                  src={salesManai}
                  className="robot"
                  style={{ height: "380px", width: "auto" }}
                />
              </div>
              <div className="panel-text">
                <h2 style={{ color: "var(--text-accent)" }}>
                  Launch Your Sales Drone Fleet
                </h2>
                <div style={{ color: "var(--text-accent)" }}>
                  Spin up fleets of intelligent sales drones that scan the
                  market, identify and verify ideal prospects, enrich their
                  profiles, and hand your team ready‑to‑engage opportunities.
                </div>
                {/* <button
              className="header-button"
              style={{ marginTop: "22px" }}
              onClick={() => scrollTo(demoRef)}
            >
              Demo
            </button> */}
                <ul className="bullet-section">
                  <li>24/7 market scanning</li>
                  <li>Multi‑source data discovery</li>
                  <li>Automated verification & enrichment</li>
                  <li>Direct routing into sales motions</li>
                </ul>
              </div>
            </div>
            <div
              style={{
                display: "flex",
                width: "97%",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {/* <div className="panel panel-text-long">
            The SalesCaptures AI research agent finds your next best sales
            targets. Sales teams are drowning in data. Whether in your CRM,
            marketing leads, or 3rd party data platforms, sales people must sift
            through mountains of data to find their next best prospect. The truth
            is, they don’t look long, if they look at all; they just take the next
            name on the list. SalesCapture’s AI Research Agent constantly hunts
            down the next best sales targets amid the masses and presents those
            prospects for sales engagement.
          </div> */}
            </div>
          </section>

          <section>
            <div
              className="panel"
              style={{
                marginTop: "22px",
                justifyContent: "space-between",
                width: "80vw",
                justifySelf: "center",
              }}
            >
              <div className="panel-text">
                <h2>How SalesCapture AI Works</h2>
                {/* <div className="subtitle">
                  Arm your sales team with the SalesCapture AI Content Studio to
                  quickly generate the best sales content based on your
                  product’s value proposition, prospect persona, and sales need.
                </div> */}
                {/* <button
                  className="header-button"
                  style={{ marginTop: "22px" }}
                  onClick={() => scrollTo(demoRef)}
                >
                  Demo
                </button> */}
              </div>
              <div className="panel-graphic">
                {/* <Robot className="robot" /> */}
                <img
                  src={salespyramid}
                  className="robot"
                  style={{ height: "180px", width: "auto" }}
                />
              </div>
            </div>
            <div className="panel-row">
              <div className="panel-text-box">
                <h2 className="faded-color">Define Your ICP</h2>
                <p>
                  Describe your ideal prospects in plain language. SalesCapture
                  interprets and executes.
                </p>
              </div>
              <div className="panel-text-box">
                <h2 className="faded-color">Hunt & Verify</h2>
                <p>
                  Agents continuously scan internal and external data sources
                  for matches.
                </p>
              </div>
              <div className="panel-text-box">
                <h2 className="faded-color">Enrich & Score</h2>
                <p>
                  AI validates criteria, confirms profiles, and enriches each
                  prospect.
                </p>
              </div>
              <div className="panel-text-box">
                <h2 className="faded-color">Sequence & Engage</h2>
                <p>
                  Approved prospects are pushed directly into outbound sales
                  sequences.
                </p>
              </div>
            </div>
            {/* <div
              style={{
                display: "flex",
                width: "97%",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <div className="panel panel-text-long">
                SalesCapture AI sales content platform provides the best sales
                content your sales team can use with a single click. The
                platform’s intelligence is derived from the best modern sales
                minds and methods combined with careful training of your
                products’ value propositions. The SalesCapture AI content engine
                is far more than simple LLM driven content creation.
                SalesCapture AI combines key aspects of your value proposition
                with best practices to generate the most effective sales
                messaging for multiple use cases.
              </div>
            </div> */}
          </section>

          <section
            style={{
              backgroundColor: "var(--light-accent)",
            }}
          >
            <div className="panel">
              <div className="panel-text">
                <h2 style={{ color: "var(--text-accent)" }}>
                  Key Capabilities
                </h2>
                {/* <div style={{ color: "var(--text-accent)" }}>
                  SalesCapture’s AI-powered sales engagement platform puts new
                  prospects into Outbound sequences on behalf of the sales
                  person using content designed for prospect conversion.
                </div>
                <button
                  className="header-button"
                  style={{ marginTop: "22px" }}
                  onClick={() => scrollTo(demoRef)}
                >
                  Demo
                </button> */}
                <ul className="bullet-section" style={{background:`#ffffff22`}}>
                  <li>Prompt‑Driven Research Agents</li>
                  <li>Multi‑Source Prospect Discovery</li>
                  <li>AI‑Powered Vetting & Verification</li>
                  <li>Deep Profile Enrichment</li>
                  <li>Guaranteed Data Quality</li>
                  <li>ICP Scoring & Approval Gates</li>
                  <li>Automated or Human‑in‑the‑Loop Sequencing</li>
                  <li>Always‑On Engagement</li>
                </ul>
              </div>
              <div className="panel-graphic">
                {/* <AgentRobot
                  className="robot"
                  style={{ width: "320px", height: "320px" }}
                /> */}
                <img
                  src={salesMan}
                  className="robot"
                  style={{width: "auto" }}
                />
              </div>
            </div>
            {/* <div
              style={{
                display: "flex",
                width: "97%",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <div className="panel panel-text-long">
                SalesCapture AI enables fully automated, partially automated and
                “shadow BDR” solutions to enhance your team’s go-to-market
                capabilities. As the research agent finds new prospects the
                agent can automatically put the prospect into an outbound sales
                campaign, using our integrated campaign delivery platform or
                using third party sales engagement platforms like Outreach.io. A
                semi automated solution allows the sales team to review data
                that the agent produces before placing the prospect into a sales
                motion. SalesCapture AI can create a virtual BDR behind every
                sales rep, working 24/7, as a shadow BDR helping your sales team
                find and close more deals!
              </div>
            </div> */}
          </section>

          <section
            ref={demoRef}
            className="contact-form"
            style={{ background: "var(--lightest-accent)" }}
          >
            {isSubmitted ? (
              <div className="thank-you-message">
                <h2>Thank You!</h2>
                <p>
                  Your demo request has been received. We will be in touch
                  shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleDemoSubmit}>
                <h2>Request a Demo</h2>
                <label>Name</label>
                <input
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                  type="text"
                  name="name"
                  placeholder="Your name.."
                  value={name}
                />

                <label>Email Address</label>
                <input
                  type="email"
                  name="email"
                  placeholder="joeschmo@mail.com..."
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  value={email}
                />

                <label>Additional Comments</label>
                <input
                  type="text"
                  name="comments"
                  onChange={(e) => {
                    setComments(e.target.value);
                  }}
                  placeholder="Your comments..."
                  value={comments}
                />

                <button
                  type="submit"
                  className="button-sub"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Processing..." : "Submit"}
                </button>

                {error && <p className="error-message">{error}</p>}
              </form>
            )}
          </section>
        </>
      ) : (
        <LegalView type={view} onBack={() => goToMessage("")} />
      )}

      <footer>
        <div>Copyright © 2025 Salescaptureai LLC. All rights reserved.</div>
        <nav className="footer-links">
          <div
            className="button-footer"
            onClick={() => {
              goToMessage("privacy");
            }}
          >
            data privacy
          </div>
          <div
            className="button-footer"
            onClick={() => {
              goToMessage("terms");
            }}
          >
            terms of use
          </div>
        </nav>
      </footer>
    </div>
  );
}

export default App;
