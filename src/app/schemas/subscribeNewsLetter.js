// schemas/contactSchema.js
import { z } from "zod";

export const subscribeNewsLetter = z.object({
  email: z.string().email("Invalid email address"),
});
