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
          Get in touch
        </h2>
        <p className="mt-6 text-lg/8 text-gray-600">
          Proin volutpat consequat porttitor cras nullam gravida at. Orci
          molestie a eu arcu. Sed ut tincidunt integer elementum id sem. Arcu
          sed malesuada et magna.
        </p>
        <dl className="mt-10 space-y-4 text-base/7 text-gray-600">
          <div className="flex gap-x-4">
            <dt className="flex-none">
              <span className="sr-only">Address</span>
              <BuildingOffice2Icon
                aria-hidden="true"
                className="h-7 w-6 text-gray-400"
              />
            </dt>
            <dd>
              545 Mavis Island
              <br />
              Chicago, IL 99191
            </dd>
          </div>
          <div className="flex gap-x-4">
            <dt className="flex-none">
              <span className="sr-only">Telephone</span>
              <PhoneIcon aria-hidden="true" className="h-7 w-6 text-gray-400" />
            </dt>
            <dd>
              <a href="tel:+1 (555) 234-5678" className="hover:text-gray-900">
                +1 (555) 234-5678
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
              <a
                href="mailto:hello@example.com"
                className="hover:text-gray-900"
              >
                hello@example.com
              </a>
            </dd>
          </div>
        </dl>
      </div>
    </div>
  );
}
