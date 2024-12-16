// FooterSection.jsx
import React from "react";

const FooterSection = ({ title, items }) => (
  <div>
    <h3 className="text-sm font-semibold text-gray-900">{title}</h3>
    <ul role="list" className="mt-6 space-y-4">
      {items.map((item) => (
        <li key={item.name}>
          <a
            href={item.href}
            className="text-sm text-gray-600 hover:text-gray-900"
          >
            {item.name}
          </a>
        </li>
      ))}
    </ul>
  </div>
);

export default FooterSection;
