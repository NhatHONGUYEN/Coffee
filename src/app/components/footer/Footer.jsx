// Footer.jsx
import React from "react";
import FooterSection from "./FooterSection";
import { navigationFooter } from "../../utils/dataFooter";
import FooterSocialLinks from "./FooterSocialLinks";
import FooterForm from "./FooterForm";

export default function Footer() {
  return (
    <footer className="bg-white">
      <div className="mx-auto max-w-7xl px-6 pt-20 pb-8 sm:pt-24 lg:px-8 lg:pt-32">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="grid grid-cols-2 gap-8 xl:col-span-2">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <FooterSection
                title="Solutions"
                items={navigationFooter.solutions}
              />
              <FooterSection title="Support" items={navigationFooter.support} />
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <FooterSection title="Company" items={navigationFooter.company} />
              <FooterSection title="Legal" items={navigationFooter.legal} />
            </div>
          </div>
          <FooterForm />
        </div>
        <FooterSocialLinks
          socialLinks={navigationFooter.social}
          copyrightText="&copy; 2024 Votre Entreprise, Inc. Tous droits réservés."
        />
      </div>
    </footer>
  );
}
