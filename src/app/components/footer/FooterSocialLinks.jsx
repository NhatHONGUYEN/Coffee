// FooterSocialLinks.jsx
import Link from "next/link";
import React from "react";

const FooterSocialLinks = ({ socialLinks, copyrightText }) => (
  <div className="mt-16 border-t border-gray-900/10 pt-8 sm:mt-20 md:flex md:items-center md:justify-between lg:mt-24">
    <div className="flex gap-x-6 md:order-2">
      {socialLinks.map((item) => (
        <Link
          key={item.name}
          href={item.href}
          target="_blank" rel="noopener noreferrer"
          className="text-gray-600 hover:text-gray-800"
        >
          <span className="sr-only">{item.name}</span>
          <item.icon aria-hidden="true" className="size-6" />
        </Link>
      ))}
    </div>
    <p className="mt-8 text-sm text-gray-600 md:order-1 md:mt-0">
      {copyrightText}
    </p>
  </div>
);

export default FooterSocialLinks;
