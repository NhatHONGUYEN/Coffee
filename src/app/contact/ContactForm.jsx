import ContactFormField from "./ContactFormField";

export default function ContactForm({ register, errors }) {
  return (
    <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
      <ContactFormField
        label="First name"
        id="first-name"
        register={register("firstName")}
        error={errors.firstName}
        autoComplete="given-name"
      />
      <ContactFormField
        label="Last name"
        id="last-name"
        register={register("lastName")}
        error={errors.lastName}
        autoComplete="family-name"
      />
      <ContactFormField
        label="Email"
        id="email"
        register={register("email")}
        error={errors.email}
        type="email"
        autoComplete="email"
      />
      <ContactFormField
        label="Phone number"
        id="phone-number"
        register={register("phoneNumber")}
        error={errors.phoneNumber}
        type="tel"
        autoComplete="tel"
      />
      <ContactFormField
        label="Message"
        id="message"
        register={register("message")}
        error={errors.message}
        type="textarea"
        rows={4}
      />
    </div>
  );
}
