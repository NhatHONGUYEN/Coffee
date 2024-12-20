// FooterSection.jsx
import Link from "next/link";
import React from "react";

const FooterSection = ({ title, items }) => (
  <div>
    <h1 className="text-sm font-semibold text-gray-900">{title}</h1>
    <ul role="list" className="mt-6 space-y-4">
      {items.map((item) => (
        <li key={item.name}>
          <Link  href={item.href} 
       
            className="text-sm text-gray-600 hover:text-gray-900"
          >
            {item.name}
          </Link>
        </li>
      ))}
    </ul>
  </div>
);

export default FooterSection;
