// FooterForm.jsx
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const FooterForm = () => (
  <div className="mt-10 xl:mt-0">
    <h3 className="text-sm font-semibold text-gray-900">
      Abonnez-vous à notre newsletter
    </h3>
    <p className="mt-2 text-sm text-gray-600 ">
      Les dernières nouvelles, articles et ressources, envoyés dans votre boîte
      de réception chaque semaine.
    </p>
    <form className="mt-6 sm:flex sm:max-w-md">
      <label htmlFor="email-address" className="sr-only bg-white">
        Adresse e-mail
      </label>
      <Input
        id="email-address"
        name="email-address"
        type="email"
        required
        placeholder="Entrez votre e-mail"
        autoComplete="email"
      />
      <div className="mt-4 sm:mt-0 sm:ml-4 sm:shrink-0">
        <Button type="submit">S'abonner</Button>
      </div>
    </form>
  </div>
);

export default FooterForm;
