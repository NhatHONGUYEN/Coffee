// src/schemas/userSchema.js
import { z } from "zod";

const userSchema = z.object({
  username: z
    .string()
    .min(3, "Le nom d'utilisateur doit contenir au moins 3 caractères"),
  email: z.string().email("L'adresse email n'est pas valide"),
  password: z
    .string()
    .min(6, "Le mot de passe doit contenir au moins 6 caractères"),
});

export default userSchema;
