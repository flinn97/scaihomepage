import { Component } from "react";

export default class LegalView extends Component {
  render() {
    const { type, onBack } = this.props;

    // You can expand this with a privacy version if needed
    const title = type === "privacy" ? "Data Privacy" : "Terms of Service";

    return (
      <section
        className="legal-view"
        style={{ padding: "48px 16px", maxWidth: "800px", margin: "0 auto" }}
      >
        <button
          className="header-button"
          onClick={onBack}
          aria-label="Back to site"
          style={{ marginBottom: 24 }}
        >
          ← Back
        </button>

        <h1>{title}</h1>
        <p style={{ marginBottom: "24px" }}>
          <strong>Last updated:</strong> 7-28-2025
        </p>

        {type === "terms" && (
          <>
            <p>
              Welcome to SalesCapture.ai (“Service”, “Platform”, “we”, “us”,
              “our”). These Terms of Service (“Terms”) govern your access to and
              use of our website located at{" "}
              <a href="https://salescapture.ai">https://salescapture.ai</a>, and
              our services, including any associated software, APIs, and
              applications (collectively, the “Service”). By accessing or using
              the Service, you agree to be bound by these Terms.
            </p>
            <p>If you do not agree to these Terms, do not use the Service.</p>

            <h2>1. Eligibility</h2>
            <ul>
              <li>
                You must be at least 18 years old and capable of forming a
                binding contract.
              </li>
              <li>
                If using on behalf of an organization, you must have authority
                to bind that organization.
              </li>
            </ul>

            <h2>2. Account Registration</h2>
            <ul>
              <li>Create an account to use most features.</li>
              <li>
                Provide accurate, complete, and up-to-date information during
                registration.
              </li>
              <li>Maintain confidentiality of account credentials.</li>
              <li>
                You are responsible for all activities under your account.
              </li>
            </ul>

            <h2>3. Description of Service</h2>
            <p>SalesCapture.ai is a cloud-based SaaS platform designed to:</p>
            <ul>
              <li>
                Automate new prospect research using public and proprietary
                data.
              </li>
              <li>
                Automate sales engagement through email, messaging, and outreach
                workflows.
              </li>
              <li>
                Integrate with CRMs and email platforms to streamline
                prospecting efforts.
              </li>
            </ul>
            <p>
              We may modify, enhance, or discontinue the Service at any time
              with or without notice.
            </p>

            <h2>4. User Responsibilities</h2>
            <ul>
              <li>
                Do not use the Service for unlawful or unauthorized purposes.
              </li>
              <li>
                Do not upload or distribute malicious code, spam, or misleading
                content.
              </li>
              <li>
                Do not interfere with the integrity, security, or functionality
                of the Service.
              </li>
              <li>
                Do not reverse engineer, decompile, or disassemble any part of
                the Service.
              </li>
              <li>Do not use the Service to spam others.</li>
            </ul>
            <p>
              You must comply with all applicable laws related to sales outreach
              and data usage, including CAN-SPAM Act, GDPR, and CCPA.
            </p>
            <p>
              You are solely responsible for your content, data, and credentials
              while using the Service.
            </p>

            <h2>5. Data Usage and Privacy</h2>
            <p>
              By using the Service, you agree to our Privacy Policy. You retain
              ownership of your data, but grant us a non-exclusive, royalty-free
              license to use, reproduce, and process it as needed to provide and
              improve the Service.
            </p>

            <h2>6. Subscription and Payment</h2>
            <ul>
              <li>Some features require a paid subscription.</li>
              <li>You agree to pay all applicable fees and taxes.</li>
              <li>Payments may be processed by a third-party provider.</li>
              <li>Fees are non-refundable except as required by law.</li>
              <li>
                Failure to pay may result in suspension or termination of
                access.
              </li>
            </ul>

            <h2>7. Intellectual Property</h2>
            <p>
              All rights, title, and interest in the Service remain with
              SalesCapture.ai and its licensors. Do not use our branding or IP
              without written consent.
            </p>

            <h2>8. Third-Party Services</h2>
            <p>
              The Service may integrate with third-party tools (e.g., Gmail,
              Salesforce). Use of these services is subject to their terms. We
              are not responsible for third-party content or services.
            </p>

            <h2>9. Termination</h2>
            <ul>
              <li>You may terminate your account at any time.</li>
              <li>
                We may suspend or terminate access for violations of these
                Terms, nonpayment, or harmful behavior.
              </li>
            </ul>

            <h2>10. Disclaimer of Warranties</h2>
            <p>
              The Service is provided “as is” and “as available.” We disclaim
              all warranties, express or implied, including merchantability,
              fitness for a particular purpose, and non-infringement.
            </p>

            <h2>11. Limitation of Liability</h2>
            <p>
              To the maximum extent permitted by law, SalesCapture.ai is not
              liable for indirect, incidental, special, or consequential
              damages, including lost profits or data. Our total liability shall
              not exceed the amount paid in the six months before the claim.
            </p>

            <h2>12. Governing Law</h2>
            <p>
              These Terms are governed by the laws of the State of Utah, without
              regard to conflict of laws. Any legal action must be brought in
              Utah courts.
            </p>

            <h2>13. Changes to Terms</h2>
            <p>
              We may update these Terms from time to time. Material changes will
              be communicated via email or site notice. Continued use after
              changes constitutes acceptance.
            </p>

            <h2>14. Contact Us</h2>
            <p>
              If you have questions, contact us at:{" "}
              <a href="mailto:alan@salescapture.com">alan@salescapture.com</a>
            </p>
          </>
        )}

        {type === "privacy" && (
          <>
            <p>
              SalesCapture.ai (“SalesCapture”, “we”, “our”, or “us”) is
              committed to protecting your privacy. This Privacy Policy explains
              how we collect, use, share, and safeguard your information when
              you use our website
              <a href="https://salescapture.ai"> https://salescapture.ai</a>,
              platform, APIs, and associated services (collectively, the
              “Service”).
            </p>
            <p>
              By using the Service, you agree to the terms of this Privacy
              Policy.
            </p>

            <h2>1. Information We Collect</h2>
            <h3>a. Information You Provide to Us</h3>
            <ul>
              <li>
                <strong>Account Information:</strong> Name, email, company name,
                phone, job title, password.
              </li>
              <li>
                <strong>Billing Information:</strong> Credit card details and
                billing address via third-party payment processor.
              </li>
              <li>
                <strong>Communications:</strong> Messages or feedback via chat,
                email, or forms.
              </li>
              <li>
                <strong>Customer Content:</strong> Contact lists, prospect data,
                notes, and campaign content you upload or generate.
              </li>
            </ul>
            <h3>b. Automatically Collected Data</h3>
            <ul>
              <li>
                <strong>Usage Data:</strong> Log files, clicks, time spent,
                navigation patterns.
              </li>
              <li>
                <strong>Device Data:</strong> Browser type, IP, OS, device ID,
                screen resolution.
              </li>
              <li>
                <strong>Cookies & Tracking:</strong> Cookies to improve
                performance and personalize experience.
              </li>
            </ul>
            <h3>c. Third-Party Data</h3>
            <p>
              We may collect business contact data (e.g., LinkedIn profiles,
              emails, titles) from trusted data vendors or public sources for
              prospecting tools, in compliance with applicable laws.
            </p>

            <h2>2. How We Use Your Information</h2>
            <ul>
              <li>Provide and maintain the Service</li>
              <li>Authenticate users and manage accounts</li>
              <li>Process payments and send invoices</li>
              <li>Automate prospect research and engagement workflows</li>
              <li>Respond to support requests and inquiries</li>
              <li>Improve and personalize the Service</li>
              <li>Comply with legal obligations</li>
            </ul>

            <h2>3. How We Share Your Information</h2>
            <ul>
              <li>With service providers (hosting, payments, analytics)</li>
              <li>
                With integrations (e.g., Gmail, CRM — only necessary data)
              </li>
              <li>For legal compliance</li>
              <li>In a business transfer (e.g., acquisition or merger)</li>
            </ul>

            <h2>4. Your Rights and Choices</h2>
            <h3>a. Access and Correction</h3>
            <p>
              Access, update, or delete data via account settings or by
              contacting us.
            </p>
            <h3>b. Opt-Out Options</h3>
            <p>
              Unsubscribe from marketing emails or disable cookies via browser
              settings.
            </p>
            <h3>c. Data Portability</h3>
            <p>Request export of your data in a portable format.</p>
            <h3>d. EU/EEA Rights (GDPR)</h3>
            <ul>
              <li>Access, correct, or delete your data</li>
              <li>Object to or restrict processing</li>
              <li>Lodge complaints with local data authority</li>
            </ul>
            <h3>e. California Residents (CCPA)</h3>
            <ul>
              <li>Know what personal data we collect and why</li>
              <li>Request deletion of personal information</li>
              <li>
                Opt-out of sale of personal information (we do not sell data)
              </li>
            </ul>

            <h2>5. Data Retention</h2>
            <p>
              We retain data only as long as necessary or required by law. You
              can request deletion at any time.
            </p>

            <h2>6. Data Security</h2>
            <p>
              We use encryption, firewalls, and access controls. No system is
              100% secure.
            </p>

            <h2>7. Children’s Privacy</h2>
            <p>
              The Service is not for individuals under 18, and we do not
              knowingly collect their data.
            </p>

            <h2>8. International Data Transfers</h2>
            <p>
              Your data may be processed outside your jurisdiction. We take
              steps to ensure adequate protection.
            </p>

            <h2>9. Changes to This Policy</h2>
            <p>
              We may update this policy. Material changes will be posted with an
              updated date and may be emailed.
            </p>

            <h2>10. Compliance with Google API Services User Data Policy</h2>
            <ul>
              <li>
                Use and transfer of Google API data complies with Google’s
                policy, including Limited Use requirements.
              </li>
              <li>
                We only access/store/share Google user data to provide or
                improve core functionality (e.g., outreach, scheduling, contact
                management).
              </li>
              <li>No use for advertising.</li>
              <li>
                No transfer to third parties except as required to provide
                features or by law.
              </li>
            </ul>

            <h2>11. Contact Us</h2>
            <p>
              Email:{" "}
              <a href="mailto:alan@salescapture.com">alan@salescapture.com</a>
            </p>
          </>
        )}

        <button
          className="header-button"
          onClick={onBack}
          aria-label="Back to site"
          style={{ marginTop: 24 }}
        >
          ← Back
        </button>
      </section>
    );
  }
}
