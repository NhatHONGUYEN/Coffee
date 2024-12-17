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
          <Textarea
            id={id}
            {...register}
            rows={rows}
            className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
            defaultValue={""}
          />
        ) : (
          <Input
            id={id}
            {...register}
            type={type}
            autoComplete={autoComplete}
            className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
          />
        )}
        {error && <p className="text-red-500 text-sm mt-1">{error.message}</p>}
      </div>
    </div>
  );
};

export default ContactFormField;
