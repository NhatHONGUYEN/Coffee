// components/FormField.js
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import React from "react";

const ContactFormField = ({
  label,
  id,
  register,
  error,
  type = "text",
  autoComplete,
  rows,
}) => {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-semibold text-gray-900">
        {label}
      </label>
      <div className="mt-2.5">
        {type === "textarea" ? (
          <Textarea id={id} {...register} rows={rows} defaultValue={""} />
        ) : (
          <Input
            id={id}
            {...register}
            type={type}
            autoComplete={autoComplete}
            className="w-full"
          />
        )}
        {error && <p className="text-red-500 text-sm mt-1">{error.message}</p>}
      </div>
    </div>
  );
};

export default ContactFormField;
