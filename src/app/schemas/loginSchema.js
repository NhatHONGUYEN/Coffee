import { z } from "zod";

const loginSchema = z.object({
  email: z.string().email("L'adresse email n'est pas valide"),
  password: z
    .string()
    .min(6, "Le mot de passe doit contenir au moins 6 caractères"),
});

export default loginSchema;
