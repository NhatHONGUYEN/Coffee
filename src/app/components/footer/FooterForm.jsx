// FooterForm.jsx
import React from "react";

const FooterForm = () => (
  <div className="mt-10 xl:mt-0">
    <h3 className="text-sm font-semibold text-gray-900">
      Abonnez-vous à notre newsletter
    </h3>
    <p className="mt-2 text-sm text-gray-600">
      Les dernières nouvelles, articles et ressources, envoyés dans votre boîte
      de réception chaque semaine.
    </p>
    <form className="mt-6 sm:flex sm:max-w-md">
      <label htmlFor="email-address" className="sr-only">
        Adresse e-mail
      </label>
      <input
        id="email-address"
        name="email-address"
        type="email"
        required
        placeholder="Entrez votre e-mail"
        autoComplete="email"
        className="w-full min-w-0 rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:w-64 sm:text-sm xl:w-full"
      />
      <div className="mt-4 sm:mt-0 sm:ml-4 sm:shrink-0">
        <button
          type="submit"
          className="flex w-full items-center justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          S'abonner
        </button>
      </div>
    </form>
  </div>
);

export default FooterForm;
