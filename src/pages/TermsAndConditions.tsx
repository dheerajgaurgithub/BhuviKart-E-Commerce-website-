import React from "react";

const TermsAndConditions: React.FC = () => (
  <div className="container mx-auto p-6 max-w-3xl">
    <h1 className="text-3xl font-bold mb-4">Terms & Conditions</h1>
    <p className="mb-2">Welcome to our Amazon Clone! Please read these terms and conditions carefully before using our website.</p>
    <ul className="list-disc pl-6 mb-4">
      <li>All product information is for demonstration purposes only.</li>
      <li>No real transactions or deliveries are made through this site.</li>
      <li>Your use of this site is subject to these terms and our privacy policy.</li>
      <li>We reserve the right to update these terms at any time.</li>
    </ul>
    <p>If you have any questions, please contact us.</p>
  </div>
);

export default TermsAndConditions;