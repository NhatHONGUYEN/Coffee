import {
  BuildingOffice2Icon,
  EnvelopeIcon,
  PhoneIcon,
} from "@heroicons/react/24/outline";

export default function LeftContact() {
  return (
    <div className="relative px-6 pt-24 pb-20 sm:pt-32 lg:static lg:px-8 lg:py-48">
      <div className="mx-auto max-w-xl lg:mx-0 lg:max-w-lg">
        <h2 className="text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">
          Contactez-nous
        </h2>
        <p className="mt-6 text-gray-600">
          Nous sommes ravis de vous accueillir dans notre café. Si vous avez des
          questions ou des commentaires, n'hésitez pas à nous contacter. Nous
          sommes là pour vous aider!
        </p>
        <dl className="mt-10 space-y-4 text-base/7 text-gray-600">
          <div className="flex gap-x-4">
            <dt className="flex-none">
              <span className="sr-only">Adresse</span>
              <BuildingOffice2Icon
                aria-hidden="true"
                className="h-7 w-6 text-gray-400"
              />
            </dt>
            <dd>
              123 Rue du Café
              <br />
              Paris, 75001
            </dd>
          </div>
          <div className="flex gap-x-4">
            <dt className="flex-none">
              <span className="sr-only">Téléphone</span>
              <PhoneIcon aria-hidden="true" className="h-7 w-6 text-gray-400" />
            </dt>
            <dd>
              <a href="tel:+33123456789" className="hover:text-gray-900">
                +33 1 23 45 67 89
              </a>
            </dd>
          </div>
          <div className="flex gap-x-4">
            <dt className="flex-none">
              <span className="sr-only">Email</span>
              <EnvelopeIcon
                aria-hidden="true"
                className="h-7 w-6 text-gray-400"
              />
            </dt>
            <dd>
              <a href="mailto:contact@cafe.com" className="hover:text-gray-900">
                contact@cafe.com
              </a>
            </dd>
          </div>
        </dl>
      </div>
    </div>
  );
}
